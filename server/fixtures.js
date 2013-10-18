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
        description: "A terrific website made by a terrific man",
        url: "http://www.google.com",
        authorID: '2',
        submitted: now
    });

        Projects.insert({
        title: 'Some Other Horrible Project',
        author: "Denny Scott",
        description: "A Horrible Website made by a Horrible Web Designer",
        url: "http://heaven.internetarchaeology.org/heaven.html#bottom",
        authorID: '3',
        submitted: now
    });
}