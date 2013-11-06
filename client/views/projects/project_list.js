Template.projectsList.helpers({
	/**
	 * Finds all projects
	 * @return collection All projects in collection
	 */
	projects: function() {
		return Projects.find({}, {sort: {"recentUpdate.updateDate" : -1}});
	},

	/**
	 * Finad all projects and give them an integer rank for animation
	 * @return Collection Returns all projects sorted by update time with an integer ranking
	 */
	projectsWithRank: function() {
		var i = 0, options = {sort: {"recentUpdate.updateDate" : -1}};
		return Projects.find({}, options).map(function(project) {
			project._rank = i;
			i += 1;
			return project;
		});
	},
});

