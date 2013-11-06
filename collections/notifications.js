Notifications = new Meteor.Collection('notifications');

  /**
Notifications.allow({
  update: ownsDocument
});
**/

/**
 * Creates a project notification and places it in the notifications collection
 * @param  Project project A project that has been updated
 * @return void
 */
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
  });
};
