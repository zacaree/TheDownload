
import parallax from './parallax';
import videoHandler from './videoHandler';
import smoothscroll from 'smoothscroll-polyfill';
import backToTop from './backToTop';
// import wipNotes from './wipNotes';


// Handles the parallax effect on the header.
parallax();
// Handles custom cover images on videos
videoHandler();
// A polyfill that allows the native smoothscroll behaivor to work in all browsers.
// Using it for "back to top" button.
smoothscroll.polyfill();
backToTop();




// For highlighted notes while in development.
// wipNotes();




// Signature
console.log('%cDesigned & Developed Internally', 'font-weight: bold; color: #F99157;');
console.log('www.zacremboldt.com');