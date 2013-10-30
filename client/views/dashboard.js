Template.dashboard.helpers({
	entry: function () {
		var subscriptions = Meteor.user().profile.subscriptions;
		var projects = Projects.find({}, {sort: {lastUpdated: -1}}).fetch();
		var TWELVE_HOURS = 12* 60 * 60 * 1000; /* ms */

		var entries = [];

		$.each(projects, function(index, project){
			if(subscriptions.indexOf(project._id) !== -1){

				entries.push({
					name: project.title,
					description: "This project has been recently updated.",
					submitted: project.lastUpdated,
					author: project.updateAuthor,
					projectId: project._id
				});
			}else if(((new Date()) - project.submitted) < TWELVE_HOURS){
				entries.push({
					name: project.title,
					description: "This is a new project that has just been made.  Perhaps you would like to subscribe to it?",
					submitted: project.lastUpdated,
					author: project.updateAuthor,
					projectId: project._id
				});
			}
		});


		return entries;
	}
});