Meteor.Router.add({

	//Routes to dashboard Page.
	'/': "dashboard",

	'/projects' : 'projectsList',

	'/about' : 'about',

	'/contactus' : 'contactUs',
	
	//Routes to individual project pages
	'/projects/:_id' : {
		to: 'projectPage',
		and: function(id) { Session.set('currentProjectId', id); }
	},

	//Routes to the Submit page, no args
	'/submit': 'projectCreate',

	//This page is used for debuging and testing.  Delete before release
	'/debug': 'debugEntries',

	'/accountManagement' : 'accountManagement',

	'/admin' : 'admin'


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
.Router.filter('requireLogin', {except: ['splash','about','contactUs']});

/**
 * Creates a global function to search for the current URL. This will be used
 * to determine which navbar <li> will be active.
 * @return String the url
 */
curPath = function() {
	c=window.location.pathname;
	var b=c.slice(0,-1);
	var a=c.slice(-1);
	if(b===""){
		return"/";
	}else{
		if(a=="/"){
			return b;
		}else{
			return c;
		}
	}
};