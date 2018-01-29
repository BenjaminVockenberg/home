$(function(){

    window.onload = function() {
        if (window.jQuery) {              
            console.log('jquery loaded');
        } else {           
            console.log('jquery not loaded');
        }
    }  
    
    var phrases = ['Handcrafted websites since ', 'Frontend developer since ', 'Expert for responsive design since ', 'Lost in Javascript since ', 'Coffee = Code since ', 'No incidents since ', 'Working without sleep since ', 'Growing a beard since ', 'Still seeing Breen since ', 'Waiting for Half-Life 3 since', '41 20 72 6f 62 6f 74 20 73 69 6e 63 65 since '];
    
    var randomNumber = randomNumberFromRange(0, phrases.length-1);

    function randomNumberFromRange(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    var since = function() {        
        return 1800 + Math.floor(Math.random() * 99);        
    }

    $('.greeting').text(phrases[randomNumber] + ' '+ since() + '.');    

});
