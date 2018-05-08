var greeterApp = angular.module('greeterApp', ['ng']);

greeterApp.component('greeterComponent', {
    templateUrl: 'js/homeGreeterMainCtrl/greet.component.html',
    bindings: {
        out: '='
    }
});
    
greeterApp.controller('GreeterController', ['$scope', '$log', '$http', '$q', 'phrasesService', 
    function($scope, $log, $http, $q, phrasesService) {

        'use strict';        
        
        // getting Json data from http and store it an array 
        var promise = phrasesService.getPhrases();        

        /**
         * @name    since
         * @param   { Number } start 
         * @param   { Number } rnd
         * @returns { Number }  
         */
        var since = function (start, rnd) {
            return start + Math.floor(Math.random() * rnd);
        };               

        /**
         * @name    randomNumber
         * @param   { Number } min 
         * @param   { Number } max
         * @returns { Number } 
         */
        var randomNumber = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };        
                        
        promise.then(function(data) {            
            
            var maxPhrases = data.data.phrases.length;
            var output = data.data.phrases[randomNumber(0, maxPhrases - 1)] + ' ' + since(1800, 99) + '.';

            /**
             * @name    $scope.hi
             * @returns { String }
             */
            $scope.hi = function () {                  
                return output;
            }; 

        });
        
        // needet for jest testing
        return {
            since : since,
            randomNumber : randomNumber
        };

    }]);      
