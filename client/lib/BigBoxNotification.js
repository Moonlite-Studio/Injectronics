createBigBoxNotification = function(title) {
  $.bigBox({
        title:"Project Update",
        content: title + " has been updated",
        timeout: 5000,
      });
};