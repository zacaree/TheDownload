

# My experience using Parcel - Things to remember:

**.posthtmlrc**  
Svgo was stripping the viewBox attribute out of my SVGs during the "build for production" process. This solves that problem.


When running build for production, The file names Parcel was giving to my css and js files didn't match what was linked in index.html. Solution was to add "--public-url ./" to my build script in package.json.


Having an underscore on my project entrypoint, index.html, caused issues when trying to use browsersync. I removed the underscore even though it hurts my OCD.



