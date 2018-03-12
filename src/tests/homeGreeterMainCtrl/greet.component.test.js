require('../../js/angular.min');
require('../../js/angular-mocks');
require('../../js/homeGreeterMainCtrl/greet.component');

// Testing the since function
describe ('GreeterApp - since(start, rnd) rnd number from start till start + rnd', function() {
    beforeEach (
        angular.mock.module('greeterApp')
    );

    it ('start 100 + rnd 10 should be greater than 99', inject(function($controller) { 
        var scope = {},
            ctrl = $controller('GreeterController', { $scope: scope }); 

        expect(ctrl.since(100, 10)).toBeGreaterThan(99);        
    }));

    it ('start 100 + rnd 10 should be less than 111', inject(function($controller) { 
        var scope = {},
            ctrl = $controller('GreeterController', { $scope: scope }); 

        expect(ctrl.since(100, 10)).toBeLessThan(111);        
    }));

});

// testing the randomNumber function
describe ('GreeterApp – randomNumber random Number from min till max', function() {
    beforeEach (
        angular.mock.module('greeterApp')
    );

    it ('min 0 and max 10 should be greater than -1', inject(function($controller) { 
        var scope = {},
            ctrl = $controller('GreeterController', { $scope: scope }); 

        expect(ctrl.randomNumber(0, 10)).toBeGreaterThan(-1);        
    })); 
    
    it ('min 0 and max 10 should be greater than 11', inject(function($controller) { 
        var scope = {},
            ctrl = $controller('GreeterController', { $scope: scope }); 

        expect(ctrl.randomNumber(0, 10)).toBeLessThan(11);        
    })); 

});
