console.log("It is I, the peachiest pie!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
  return function (plusNumber) {
    return number + plusNumber;
  };
}

let plus15 = plus(15);

console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

let nameList = ``;

users.forEach((user, index) => {
 nameList += user.name;
 if (index < users.length - 1) {
    nameList += `, `;
 } else {
    nameList += `.`;
 }
});

console.log(`Users:`, nameList);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let userScore = users.map((user) => {
    userObject = {};
userObject.name = user.name;
userObject.score = user.score;
  
   return userObject
});
//Takes the users array, makes a temporary empty object, then fills each object with only the key: value pairs for name and score.
console.log(userScore)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let userActive = users.filter((user) => user.isActive).map((user) => user.name).join(`, `);
//Takes the users array, then filters for those who isActive == true. Then, for each of those users, the MAP returns their name only.
// Finally, join adds a comma and space between each name. In this case, the period at the end is included in the console log.

console.log(`Active users: ${userActive}.`)

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let userByScore = users.sort((a, b) => b.score - a.score);

console.log(userByScore)

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

let averageScore = users.reduce((amounts, user) => {
    amounts.totalScore += user.score;
    amounts.totalNumbers += 1;
    let average = amounts.totalScore / amounts.totalNumbers;
    console.log(`Round ${amounts.totalNumbers} \nRunning Total Score: ${amounts.totalScore} \nRunning Total Numbers: ${amounts.totalNumbers} \nRunning Average: ${average}`)
    return amounts;
}, {totalScore: 0, totalNumbers: 0});

let finalAverage = averageScore.totalScore / averageScore.totalNumbers;

console.log(`Final Average Score: ${finalAverage}`)