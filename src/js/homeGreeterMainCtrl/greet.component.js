angular.module('greeterApp', [])

    .controller('GreeterController', ['$scope', function($scope) {

        'use strict';

        // Phrases Array
        // Todo: Outsource to a API  
        var phrases = [
            'Handcrafted websites since ',
            'Frontend developer since ',
            'Expert for responsive design since ',
            'Lost in Javascript since ',
            'One Coffee = new code lines: ',
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
            'Maybe the next Call of Duty will take place in ',
            'Doc Brown sends you back to ',
            'You died in '
        ];
        
        /**
         * @name since
         * @param {Number} start 
         * @param {Number} rnd
         * @returns {Number}  
         */
        var since = function (start, rnd) {
            return start + Math.floor(Math.random() * rnd);
        };

        /**
         * @name randomNumber
         * @param {Number} min 
         * @param {Number} max
         * @returns {Number} 
         */
        var randomNumber = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        // generates a phrase out of the phraes Array    
        var exportPhrase = phrases[randomNumber(0, phrases.length - 1)] + ' ' + since(1800, 99) + '.';
        
        /**
         * @name $scope.hi
         * @returns {String}
         */
        $scope.hi = function () {
            return exportPhrase;                       
        };
        
        // needet for jest testing
        return {
            since : since,
            randomNumber : randomNumber
        };

    }]);
