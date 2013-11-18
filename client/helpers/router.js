Meteor.Router.add({

	//Routes to dashboard Page.
	'/': {
		to: "dashboard",
		and: function() {Meteor.setTimeout(function(){
			window.scrollTo(0,0);},1);}
	},

	'/projects' : {
		to: "projectsList",
		and: function() {Meteor.setTimeout(function(){
			window.scrollTo(0,0);},1);}
	},

	'/about' : {
		to: "about",
		and: function() {Meteor.setTimeout(function(){
			window.scrollTo(0,0);},1);}
	},

	'/contactus' : {
		to: "contactUs",
		and: function() {Meteor.setTimeout(function(){
			window.scrollTo(0,0);},1);}
	},

	'/prices' : {
		to: "prices",
		and: function() {Meteor.setTimeout(function(){
			window.scrollTo(0,0);},1);}
	},
	
	//Routes to individual project pages
	'/projects/:_id' : {
		to: 'projectPage',
		and: function(id) { Session.set('currentProjectId', id); }
	},

	//Routes to the Submit page, no args
	'/submit': {
		to: "projectCreate",
		and: function() {Meteor.setTimeout(function(){
			window.scrollTo(0,0);},1);}
	},

	//This page is used for debuging and testing.  Delete before release
	'/debug': {
		to: "about",
		and: function() {Meteor.setTimeout(function(){
			window.scrollTo(0,0);},1);}
	},

	'/accountManagement' : {
		to: "accountManagement",
		and: function() {Meteor.setTimeout(function(){
			window.scrollTo(0,0);},1);}
	},

	'/admin' : {
		to: "admin",
		and: function() {Meteor.setTimeout(function(){
			window.scrollTo(0,0);},1);}
	},


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
.Router.filter('requireLogin', {except: ['splash','about','contactUs','prices']});

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