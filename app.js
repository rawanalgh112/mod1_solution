(function () {
  // strict mode enforces stricter parsing and error handling on the code at runtime.
'use strict';

var x =

angular.module('NameCalculator', [])

.controller('NameCalculatorController' , function ($scope) {
$scope.name = "" ;
$scope.totalValue = 0 ;

$scope.displayNumeric= function () {
var totalNameValue = calculateNumericForString ($scope.name)  ; // get the total value
$scope.totalValue = totalNameValue;

};

function calculateNumericForString (string) {
var totalStringValue = 0 ;
for (var i = 0 ; i < string.length ; i ++){

  totalStringValue += string.charCodeAt(i);

}
 return totalStringValue;

}

});


})();
