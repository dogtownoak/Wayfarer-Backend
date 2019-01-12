const db = require("../models");

let comment_list = {
  body: "This is the first comment from this user",
  author: "Jane Smith",
  timestamp: new Date("12-13-2018")
};

let post_list = {
  title: "Why I can't wait to go to Portland",
  picture: "https://picsum.photos/200",
  body: "Let me count the reasons why I can't wait to go to Portland",
  author: "Bob Smith",
  comments: []
};

let city_list = {
  city: "Portland",
  state: "Oregon",
  country: "United States of America",
  posts: []
};

let user_list = [
  {
    username: "Jane Smith",
    about: "Let me tell you about this user",
    currentCity: "San Francisco",
    profilePic: "https://picsum.photos/200",
    joinDate: new Date("12-13-2018"),
    password: "Password_123",
    email: "david@gmail.com"
  }
];

db.Cities.remove({}, (err, cities) => {
  db.Posts.remove({}, (err, posts) => {});
  db.Comments.remove({}, (err, comments) => {});
  db.Comments.create(comment_list, (err, savedComment) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("comment created successfully");
      db.Posts.create(post_list, (err, savedPost) => {
        if (err) {
          return console.log(err);
        }
        savedPost.comments.push(savedComment);
        savedPost.save((err, savedPost_list) => {
          if (err) {
            return console.log(err);
          } else {
            console.log("post_list", savedPost_list);
            db.Cities.create(city_list, (err, savedCity) => {
              if (err) {
                return console.log(err);
              }
              savedCity.posts.push(savedPost);
              savedCity.save((err, savedCities_List) => {
                if (err) {
                  return console.log(err);
                } else {
                  console.log("cities_list", savedCities_List);
                }
              });
            });
          }
        });
      });
    }
  });
});

db.User.deleteMany({}, function(err, user) {
  console.log("removed all users");
  db.User.create(user_list, function(err, savedUsers) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("recreated users");
    console.log("create " + savedUsers.length + " Users");
  });
});
