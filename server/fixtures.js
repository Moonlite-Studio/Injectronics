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
        stakeholders: [],
        submitted: now,
        lastUpdated: new Date().getTime(),
        updateAuthor: "Travis Scott"
    });

        Projects.insert({
        title: 'Some Other Horrible Project',
        author: "Denny Scott",
        description: "A Horrible Website made by a Horrible Web Designer",
        url: "http://heaven.internetarchaeology.org/heaven.html#bottom",
        authorID: '3',
        stakeholders: [],
        submitted: now,
        lastUpdated: new Date().getTime(),
        updateAuthor: "Denny Scott"
    });
}

if (Entries.find().count() === 0){
    var now = new Date().getTime();

    var artId = Meteor.users.insert({
        profile: { name: 'Art Vandelay' }
    });

    Entries.insert({
        name: 'Art Vandelay',
        uId : artId,
        submitted: now,
        description: "Uploaded info about the addition to the guggenheimer. You know it didn't really take that long.",
        projectId: "3YgGrTC7TrL65pgxs"
    });

    Entries.insert({
        name: 'Denny Scott',
        uId : artId,
        submitted: now,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
        projectId: "3YgGrTC7TrL65pgxs"
    });

    Entries.insert({
        name: 'Travis Scott',
        uId : artId,
        submitted: now,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
        projectId: "3YgGrTC7TrL65pgxs"
    });

    Entries.insert({
        name: 'Kevin MacKay',
        uId : artId,
        submitted: now,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
        projectId: "3YgGrTC7TrL65pgxs"
    });

}