Template.projectItem.events({
	'click #subscribeButton': function () {

		Meteor.call('addSubscription', this._id, function (error, result) {
		});


		if($('#subscribeButton').hasClass('btn-danger')){
			$('#subscribeButton').removeClass("btn-danger").addClass("btn-success");
			$('#subscribeButton').html("Subscribed!");
		}
		else{
			$('#subscribeButton').removeClass("btn-success").addClass("btn-danger");
			$('#subscribeButton').html("Click to Subscribe");
		}
	},

	'click #updateButton' : function () {
		Meteor.call('updateProject', this._id, function (error, result) {
		});

		alert("hello");
	}
});

Template.projectItem.helpers({
	projectId: function () {
		return this._id;
	}
});