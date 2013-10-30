Template.projectCreate.events({
	/**
	 * Creates a projects and inserts it in the project collection
	 * @param  Event event The event of clicking the button
	 * @return void
	 */
	'submit form': function (event) {
		//This will stop the default submitting of the form
		event.preventDefault();

		//Creates a project var that will pass the arg
		//to the database
		var project = {
			title: $(event.target).find('[name=title]').val(),
			description: $(event.target).find('[name=description]').val()
		};

		//Calls the newly created Project's pafe after creating
		Meteor.call('project', project, function (error, id) {
			if (error) {
                // display the error to the user
                throwError(error.reason);
                // if the error is that the post already exists, take us there
                if (error.error === 302){
					Meteor.Router.to('projectPage', error.details);
                }
            } else {
                //no errors send to the new page
				Meteor.Router.to('projectPage', id);
            }
        });

	}
});