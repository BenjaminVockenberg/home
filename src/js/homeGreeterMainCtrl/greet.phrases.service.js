greeterApp.service('phrasesService', ['$http', '$q', '$log', function($http, $q, $log) {
        
        var deferred = $q.defer();
        
        $http.get('../../js/homeGreeterMainCtrl/greet.phrases.json').then(function(data) {
            deferred.resolve(data);
        });

        /**
         * @name getPhrases
         * @returns promise { json }
         */
        this.getPhrases = function(){            
            return deferred.promise;
        };         

    }]);