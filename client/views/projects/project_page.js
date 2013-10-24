Template.projectPage.helpers({
	//Gets the session ID for the current Project
	//Allowing us to grab the data
	currentProject: function () {
		return Projects.findOne(Session.get('currentProjectId'));
	}
});