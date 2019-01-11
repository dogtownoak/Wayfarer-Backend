const db = require("../models");

let city_list = [
  {
    city: "Portland",
    state: "Oregon",
    country: "United States of America"
    // "posts": ENTER POST ID
  }
];

let post_list = [
  {
    title: "Why I can't wait to go to Portland",
    picture: "https://picsum.photos/200",
    body: "Let me count the reasons why I can't wait to go to Portland",
    author: "Bob Smith"
    // "comments": ENTER COMMENT ID
  }
];

let user_list = [
  {
    userName: "Jane Smith",
    about: "Let me tell you about this user",
    currentCity: "San Francisco",
    profilePic: "https://picsum.photos/200",
    joinDate: new Date("12-13-2018"),
    password: "Password_123",
    email: "david@gmail.com"
  }
];

db.Posts.deleteMany({}, function(err, post) {
  console.log("removed all drinks");
  db.Posts.create(post_list, function(err, savedPosts) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("recreated" + savedPosts.length + "posts");
  });
});

db.Cities.deleteMany({}, function(err, city) {
  console.log("removed all cities");
  db.Cities.create(city_list, function(err, savedCities) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("created" + savedCities.length + "cities");
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
    console.log("create" + savedUsers.length + "Users");
  });
});
