// const abc = require('./people'); // this doesn't have to be the same name of what I'm importing but notice below in the destructuring form it has to be the same
const { athletes, ages } = require('./people'); // de structuring is a nice way to import multiple different things form a different file

// console.log(abc);
// console.log(athletes);
// console.log(abc.athletes, abc.ages);
// console.log(athletes, ages);

const os = require('os');

console.log(os.platform(), os.homedir());
