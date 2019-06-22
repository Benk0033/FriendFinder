// 5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

// ```json
// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// }

// Pre-defined array of friends
var friendsArray = [
    {
        name: "Test Lord",
        photo: "https://runt-of-the-web.com/wordpress/wp-content/uploads/2015/04/missing-parents.png",
        scores: [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    },
    {
        name: "Test Woman",
        photo: "http://www.datinggamut.com/wp-content/uploads/2018/05/Tinder-profile-bio-for-girls.jpg",
        scores: [
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ]
    },
    {
        name: "Test Girl",
        photo: "https://cdn2-www.mandatory.com/assets/uploads/2015/03/man_file_1057800_no-ebola-tinder.png",
        scores: [
            4,
            2,
            1,
            5,
            3,
            2,
            4,
            5,
            3,
            1
        ]
    }
];

// export the data to be used in other files
module.exports = friendsArray;

