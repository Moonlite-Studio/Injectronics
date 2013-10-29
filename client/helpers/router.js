Meteor.Router.add({

	//Routes to dashboard Page.
	'/': "dashboard",

	'/projects' : 'projectsList',
	
	//Routes to individual project pages
	'/projects/:_id' : {
		to: 'projectPage',
		and: function(id) { Session.set('currentProjectId', id); }
	},

	//Routes to the Submit page, no args
	'/submit': 'projectCreate',

	//This page is used for debuging and testing.  Delete before release
	'/debug': 'debugEntries'


});

Meteor.Router.filters({
    'requireLogin': function(page) {
        if (Meteor.user())
            return page;
        else if (Meteor.loggingIn())
            return 'loading';
        else
            return 'splash';
    }
});
Meteor
.Router.filter('requireLogin', {except: 'splash'});