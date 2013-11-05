// Fixture data 
if (Projects.find().count() === 0) {
    var now = new Date().getTime();


    // create two users
    var tomId = Meteor.users.insert({
        profile: { name: 'Tom Coleman' }
    });
    var tom = Meteor.users.findOne(tomId);
    var sachaId = Meteor.users.insert({
        profile: { name: 'Sacha Greif' }
    });


    Projects.insert({
        title: 'Concloud Project',
        author: "Travis Scott",
        description: "A terrific web app made by a terrific man",
        authorID: 'BXizcEzSJXB33rNir',
        submitted: now,
        updates: [{
            updateDate: new Date().getTime(),
            updateAuthorName: "Travis Scott",
            updateAuthorID: "BXizcEzSJXB33rNir"
        }],
        recentUpdate: {
            updateDate: new Date().getTime(),
            updateAuthorName: "Travis Scott",
            updateAuthorID: "BXizcEzSJXB33rNir"
        }
    });

        Projects.insert({
        title: "Project For Dr. Henry's Awesome Course",
        author: "Denny Scott",
        description: "A Web Project created for ACS-3909",
        authorID: 'ifzqdMcRa78c3LWu3',
        submitted: now,
        updates: [{
            updateDate: new Date().getTime(),
            updateAuthorName: "Denny Scott",
            updateAuthorID: "ifzqdMcRa78c3LWu3"
        }],
        recentUpdate: {
            updateDate: new Date().getTime(),
            updateAuthorName: "Denny Scott",
            updateAuthorID: "ifzqdMcRa78c3LWu3"
        }
    });
}