Template.dashboard.helpers({
	/**
	 * This will cycle through all collections that can be
	 * posted to the dashboard and sort them by date and
	 * check if the user is subscribed to wanted entry
	 * @return Array Contains objects of entries to be posted to the dashboard
	 */
	entry: function () {
		var projects = Projects.find({}, {sort: {"recentUpdate.updateDate" : -1}}).fetch();
		var user = Meteor.user();
		var TWELVE_HOURS = 12* 60 * 60 * 1000; /* ms */

		var entries = [];

		//This will go through each project and if a subscription
		//matches it it will push it to the entries array
		$.each(projects, function(index, project){
			//If the found project is subscribed to
			if(Subscriptions.findOne({userID: user._id , projectID: project._id})){
				entries.push({
					name: project.title,
					description: "This project has been recently updated.",
					submitted: project.recentUpdate.updateDate,
					author: project.recentUpdate.updateAuthorName,
					projectId: project._id,
					type: "project"
				});
			}
			//If the project is not subscribed to, and also
			//made in the last 12 hours
			else if(((new Date()) - project.submitted) < TWELVE_HOURS){
				entries.push({
					name: project.title,
					description: "This is a new project that has just been made.  Perhaps you would like to subscribe to it?",
					submitted: project.recentUpdate.updateDate,
					author: project.recentUpdate.updateAuthorName,
					projectId: project._id,
					type: "project"
				});
			}
		});


		return entries;
	}
});