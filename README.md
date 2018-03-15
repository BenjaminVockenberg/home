# home

This is a simple website project I created a long time ago. Originally it was meant to be a portfolio site. Now it is more like a testing area. 

## Changes

- I switched from jquery to VueJs for testing my PhraseGenerator build with another lib.

- I Switched from VueJs to AngularJS 1.6.9 for testing my PhraseGenerator in a legacy framework.

- Implemented unit testing with jest for continous integration with circleCi.

  - Jest test suit is up and running

  - even with angularjs Controller, Services and Factories

- Implemented ESlint for keeping track of the coding style
  
  - it finally works with angularJS and CommonJS :)
  - added it to the package.json fur running a lint easy via npm run
  
  Bug with gulp uglify. right now, no way to fix that!
