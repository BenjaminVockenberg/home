// Register greeter component, along with its associated controller and template
app.component('greetComponent', {
  
  // $ctrl is alias for $scope wich never should be called directly
  template: '<p class="text-center greeting">{{ $ctrl.hi() }}</p>',  
  controller: function homeGreeterMainCtrl() {

    // TODO: Fix the digest loop issue within the greeterClass
    // Maybe we can fix this by get rid of component and do the old fashioned way    

    var phrases = [
      'Handcrafted websites since ',
      'Frontend developer since ',
      'Expert for responsive design since ',
      'Lost in Javascript since ',
      'Coffee = new code lines: ',
      'No incidents since ',
      'Working without sleep since ',
      'Growing a beard since ',
      'Still seeing Breen since ',
      'Waiting for Half-Life 3 since',
      '41 20 72 6f 62 6f 74 20 73 69 6e 63 65 since ',
      'Playing Minecraft since ',
      'No cigarretes since ',
      'Diablo 3 Paragon Level: ',
      'Father of the year ',
      'Call this number 555 - 678 ',
      'Knowing Scrum since ',
      'Number of the day: ',
      'Average amount of coffees a day: ',
      'Remember the year ',
      'Did you ever count till ',
      'Don\'t break rule ',
      'Consumed calories today: ',
      '1982 > ',
      'Vockenberg was founded in ',
      'I ate my new blue underpants in ',
      'I sell my Magic The Gathering cards for at least $',
      'Maybe the next Call of Duty will take place in '
    ];
    
    var since;
    var randomNumber;

    this.hi = function () {      

      // a random year from "start" till "start" + "rnd"
      since = function (start, rnd) {
        return start + Math.floor(Math.random() * rnd);
      }

      // generates a random number from "min" to "max"
      randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);  
      }      

      return (phrases[randomNumber(0, phrases.length - 1)] + ' ' + since(1800, 99) + '.');
    };
  }
});
