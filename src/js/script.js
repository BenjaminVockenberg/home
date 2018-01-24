$(function(){

    window.onload = function() {
        if (window.jQuery) {              
            console.log('jquery loaded');
        } else {           
            console.log('jquery not loaded');
        }
    }  
    
    var phrases = ['Handcrafted websites since ', 'Frontend developer since ', 'Experts for responsive design since '];
    
    var randomNumber = randomNumberFromRange(0, phrases.length-1);

    function randomNumberFromRange(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
  
    var since = function() {        
        return 1800 + Math.floor(Math.random() * 99);        
    }

    $('.greeting').text(phrases[randomNumber] + ' '+ since() + '.');    

});