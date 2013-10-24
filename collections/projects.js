Projects = new Meteor.Collection('projects');

Meteor.methods({
	/**
	 * This function will data validate the new project being passed
	 * and then if no errors occur, place this new project in
	 * the Project collection
	 * @param  {[object]} projectAttributes [A prelimeanry project object, containg the title, description, and url]
	 * @return {[string]}                   [A String of its ID in the collection]
	 */
	project: function(projectAttributes){
		var user = Meteor.user();

		//Ensures that the user is logged in
		if (!user){
			throw new Meteor.Error(401, "You need to log in to create new projects");
		}

		if(!projectAttributes.title){
			throw new Meteor.Error(422, 'Error 422: Project must have a title');
		}

		//Checks to see if this project has already been created
		if (projectAttributes.url && projectWithSameLink){
			throw new Meteor.Error(302, 'This link has already been posted', projectWithSameLink._id);
		}

		//filling in other keys
		var proj = _.extend(_.pick(projectAttributes, 'title', 'description'), {
			authorID: user._id,
			author: user._id, //create author!!
			submitted: new Date().getTime(),
			stakeholders: []
			//NEED TO FILL IN DATA FOR HOLDING ACTUAL DOCUMENTS!!
		});

		//Inserts new project into collection
		var projectID = Projects.insert(proj);

		//returns the ID of the new project
		return projectID;
	}
});