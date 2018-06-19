/**
 * @name appNavigationCtrl
 * @description helps to navigate through the page
 */
greeterApp.controller('appNavigationCtrl', [
    '$scope',      
    '$location', 
    '$anchorScroll', 
    '$element', 
    function (
        $scope, 
        $location, 
        $anchorScroll, 
        $element
    ) {

    var currentNavPoint = '';
    var previousNavPoint = '';
    var offsetY = 0;
    
    /**
     * @name scrollTo
     * @param { * } id 
     * @param { * } event 
     */
    $scope.scrollTo = function(id, event) {
        $location.hash(id);
        if (currentNavPoint !== angular.element(document.querySelector('#' + event.target.id))) {
            previousNavPoint = currentNavPoint;
            currentNavPoint = angular.element(document.querySelector('#' + event.target.id));
            offsetY = currentNavPoint.$element.yOffset();
            console.log(offsetY);
            currentNavPoint.addClass('active');
        } 
        if (previousNavPoint !== '') {
            previousNavPoint.removeClass('active');
        }            
        // scrolling 50px more to have a little more whitespace
        $anchorScroll.yOffset = 50;
    };

}]);
