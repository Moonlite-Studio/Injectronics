Notifications = new Meteor.Collection('notifications');

  /**
Notifications.allow({
  update: ownsDocument
});
**/

createProjectNotification = function(project) {
  var user = Meteor.user();
  var projectSubs = Subscriptions.find({projectID: project._id});
  projectSubs.forEach(function (sub) {
    Notifications.insert({
      userID: sub.userID,
      projectID: project._id,
      updateAuthorName: project.recentUpdate.updateAuthorName,
      title: project.title,
      submitted: new Date().getTime(),
      read: false
    });
    createBigBoxNotification(project.title);
  });
};

var createBigBoxNotification = function(title) {
  $.bigBox({
        title:"Project Update",
        content: title + " has been updated",
        timeout: 5000,
      });
};
