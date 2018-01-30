$(function(){

    // checking if jquery has been loaded
    window.onload = function() {
        if (window.jQuery) {              
            console.log('jquery loaded');
        } else {           
            console.log('jquery not loaded');
        }
    }  
    
    var phrases = ['Handcrafted websites since ', 'Frontend developer since ', 'Expert for responsive design since ', 'Lost in Javascript since ', 'Coffee = Code since ', 'No incidents since ', 'Working without sleep since ', 'Growing a beard since ', 'Still seeing Breen since ', 'Waiting for Half-Life 3 since', '41 20 72 6f 62 6f 74 20 73 69 6e 63 65 since ', 'Playing Minecraft since ', 'No cigarretes since ', 'Paragon Level ', 'Father of the year ', 'Call this number 555 - 678 ', 'Knowing Scrum since ', 'Number of the day: ', 'Average amount of coffees a day: ', 'Remember the year ', 'Did you ever count till ', 'Don\'t break the rule ', 'Consumed calories today: ' ];
      
    var since = function(start, rnd) {        
        return start + Math.floor(Math.random() * rnd);        
    }

    var randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    $('.greeting').text(phrases[randomNumber(0, phrases.length - 1)] + ' '+ since(1800, 99) + '.');    

});
