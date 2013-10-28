Template.dashboardEntry.helpers({
	convertedTime: function () {
		return new Date(this.submitted).toString();
	}
});