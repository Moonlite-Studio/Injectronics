Template.notifications.helpers({
  notifications: function() {
    return Notifications.find({userID: Meteor.userId(), read: false});
  },
  notificationCount: function(){
    return Notifications.find({userID: Meteor.userId(), read: false}).count();
  }
});
