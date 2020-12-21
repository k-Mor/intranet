/*
 * This file holds all of the code for seeding the Posts collection in the DB
 */
const dbFile = require('../js/db'), // Getting an instance of the DB
    postSchema = require('../models/schemas/Post'), // Grabbing the schema
    mongoose = require('mongoose'); 


// Connect to the DB;
dbFile.connect();

// Array of random posts
let posts = [

    {
        title: 'Once Upon A Time',
        subtitle: 'this is a subtitle',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi optio non voluptatem. Aperiam dolores dicta quibusdam doloribus. Sed eligendi accusamus tempora numquam temporibus veritatis mollitia recusandae magnam aut quos.",
        author: "bobby jones",
        publish_date: new Date(),
        author: 'username',


        tags: ['happy', 'sad', 'funny', 'silly', 'amanda', 'joey'],

        meta: [{ thumbsup: 50 }]

    },

    {
        title: 'Long Comments Here',
        subtitle: 'this is a subtitle',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi optio non voluptatem. Aperiam dolores dicta quibusdam doloribus. Sed eligendi accusamus tempora numquam temporibus veritatis mollitia recusandae magnam aut quos.",
        comments: [
            { body:'THIS IS A COMMENT', date: new Date(), user:'theMightyFish' }, 
            { body:'Bacon ipsum dolor amet meatball doner chislic picanha short loin meatloaf cupim, ball tip pancetta swine jerky pastrami pork belly. Alcatra corned beef cupim prosciutto, meatloaf salami filet mignon meatball. Turkey t-bone corned beef meatloaf strip steak fatback tenderloin cow pork belly rump. Porchetta bresaola cupim landjaeger ham hock prosciutto pig. Short ribs tenderloin tongue jerky short loin. Jerky kevin kielbasa pancetta, shoulder ribeye corned beef cupim swine beef ribs shank boudin sirloin picanha andouille. Alcatra chuck fatback andouille shankle ground round. Sirloin strip steak boudin drumstick jowl tenderloin. Prosciutto biltong flank pancetta ground round chicken meatball bacon beef ribs. Chicken strip steak beef, landjaeger tongue venison leberkas swine boudin meatloaf pork belly porchetta pig salami sirloin. Tail picanha tongue capicola spare ribs.', date: new Date(), user:'theMightyFish' }, 
            { body:'Porchetta pancetta short ribs chicken prosciutto rump ribeye sausage pig pork loin. Cow boudin t-bone filet mignon venison, frankfurter swine pancetta. Swine ball tip doner jerky short ribs shoulder tenderloin ham hock beef ribs flank t-bone boudin jowl kevin. Kielbasa strip steak kevin cupim corned beef, pastrami burgdoggen pork buffalo capicola spare ribs tail prosciutto. Fatback jerky sirloin tail. Corned beef porchetta pastrami doner swine. Swine tenderloin beef beef ribs hamburger prosciutto ham hock drumstick ground round kielbasa bresaola jowl bacon andouille spare ribs.', date: new Date(), user:'BobbyJones' }, 
            { body:'THIS IS A COMMENT', date: new Date(), user:'theMightyFish' }, 
            { body:'THIS IS A COMMENT', date: new Date(), user:'theMightyFish' }, 
            { body:'THIS IS A COMMENT', date: new Date(), user:'SomeLongUserName' }, 
            { body:'THIS IS A COMMENT', date: new Date(), user:'andHelloThere' }, 
            { body:'THIS IS A COMMENT', date: new Date(), user:'theMightyFish' }, 
            { body:'Porchetta pancetta short ribs chicken prosciutto rump ribeye sausage pig pork loin. Cow boudin t-bone filet mignon venison, frankfurter swine pancetta. Swine ball tip doner jerky short ribs shoulder tenderloin ham hock beef ribs flank t-bone boudin jowl kevin. Kielbasa strip steak kevin cupim corned beef, pastrami burgdoggen pork buffalo capicola spare ribs tail prosciutto. Fatback jerky sirloin tail. Corned beef porchetta pastrami doner swine. Swine tenderloin beef beef ribs hamburger prosciutto ham hock drumstick ground round kielbasa bresaola jowl bacon andouille spare ribs.', date: new Date(), user:'OHNOTHIADOIAJIFASSSS' }
        ],
        publish_date: new Date(),
        date_updated: new Date(),
        author: "bobby jones",

        tags: ['Something', 'sad', 'joey', 'Something', 'sad', 'joey', 'Something', 'sad', 'joey','Something', 'sad', 'joey','Something', 'sad', 'joey','Something', 'sad', 'joey'],

        meta: [{ thumbsup: 10 }]

    },

    {
        title: 'Is There Life After Death?',
        subtitle: 'this is a subtitle',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi optio non voluptatem. Aperiam dolores dicta quibusdam doloribus. Sed eligendi accusamus tempora numquam temporibus veritatis mollitia recusandae magnam aut quos.",
        author: "bobby jones",
        publish_date: new Date(),
        author: 'username',


        tags: ['general', 'sad', 'funny', 'silly', 'dairy', 'joey'],

        meta: [{ thumbsup: 50 }]

    },

    {
        title: 'The Slippery Slope',
        subtitle: 'this is a subtitle',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi optio non voluptatem. Aperiam dolores dicta quibusdam doloribus. Sed eligendi accusamus tempora numquam temporibus veritatis mollitia recusandae magnam aut quos.",
        comments: [{ body:'THIS IS A COMMENT', date: new Date(), user:'theMightyFish' }],
        publish_date: new Date(),
        date_updated: new Date(),
        author: "bobby jones",

        meta: [{ thumbsup: 10 }]

    },

    {
        title: 'The Broken Halo',
        subtitle: 'this is a subtitle',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi optio non voluptatem. Aperiam dolores dicta quibusdam doloribus. Sed eligendi accusamus tempora numquam temporibus veritatis mollitia recusandae magnam aut quos.",
        comments: [{ body:'THIS IS A COMMENT', date: new Date(), user:'theMightyFish' }],
        publish_date: new Date(),
        date_updated: new Date(),
        author: "bobby jones",
        tags: ['general', 'cats', 'funny', 'silly', 'David'],
        meta: [{ thumbsup: 10 }]

    }

    
];

// Creating posts from the seed data
for (let post of posts) {

    // Create a new post based on the Post schema
    let newPost = new postSchema.Post(post);
    
    // Save the post
    newPost.save()
    .then(p => {
        console.log(p) 
    })
    .catch(e => {
        console.log(e);
    });
};



