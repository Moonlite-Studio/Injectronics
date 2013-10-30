Template.projectsList.helpers({
	/**
	 * Finds all projects
	 * @return collection All projects in collection
	 */
	projects: function() {
		return Projects.find({}, {sort: {lastUpdated: -1}});
	}
});