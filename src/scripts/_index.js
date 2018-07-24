// import mod1 from "./module1";
// import { mod2part1, mod2part2 } from "./module2";
// import mod3 from './module3';
// import fileSystem from 'fs';
import parallax from './parallax';
import wipNotes from './wipNotes';
import videoHandler from './videoHandler';
import smoothscroll from 'smoothscroll-polyfill';
import backToTop from './backToTop';


// Handles the parallax effect on the header.
parallax();
// Handles custom cover images on videos
videoHandler();
// A polyfill that allows the native smoothscroll behaivor to work in all browsers.
// Using it for "back to top" button.
smoothscroll.polyfill();
backToTop();




// For notes while in production.
wipNotes();





// console.log(mod1);
// console.log(mod2part1);
// console.log(mod2part2);
// console.log(mod3)

// // const app = document.getElementById('app');
// const textFromFile = document.getElementById('textFromFile');
// const text = fileSystem.readFileSync(__dirname + '/../../copy.txt', 'utf8');
// textFromFile.innerHTML = text;

