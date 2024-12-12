// const course = require("./course.json");

// console.log(course);

// console.log(typeof course);

// console.log(course.title);

// console.log(course.asignatures);

// Convert JS object to JSON string
let courseInfo = {
  "title": "Learning Node.js",
  "numViews": 45641,
  "numLikes": 21334,
  "asignatures": [
    "Javascript",
    "Node.js"
  ],
  "public": true
}

let infoCourseJSON = JSON.stringify(courseInfo);

// console.log(infoCourseJSON);
// console.log(typeof infoCourseJSON);

// Convert JSON string to JS object
let objCourseJSON = JSON.parse(infoCourseJSON);

console.log(objCourseJSON);
console.log(typeof objCourseJSON);


