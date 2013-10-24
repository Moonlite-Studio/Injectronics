Meteor.Router.add({
	//Routes Home Page.  Change Later to Basic Dashboard
	'/': "projectsList",
	
	//Routes to individual project pages
	'/projects/:_id' : {
		to: 'projectPage',
		and: function(id) { Session.set('currentProjectId', id); }
	},

	//Routes to the Submit page, no args
	'/submit': 'projectCreate'


});