greeterApp.service('phrasesService', ['$http', '$q', function($http, $q) {
        
        var deferred = $q.defer();
        
        $http.get('../../js/homeGreeterMainCtrl/greet.phrases.json').then(function(data) {
            deferred.resolve(data);
        });

        this.getPhrases = function(){
            return deferred.promise;
        };       

    }]);