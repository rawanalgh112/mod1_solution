(function () {
  // strict mode enforces stricter parsing and error handling on the code at runtime.
'use strict';

var x =

angular.module('AssiCalculator', [])

.controller('LunchCheckController' , function ($scope) {
$scope.name = "" ;
$scope.Message= "";

$scope.Check = function () {

 var originalString = document.getElementById('Mealsinput').value;
var fruits = [];

 fruits = originalString.split(',');

console.log(fruits); // 3


if (fruits.length === 1 && (fruits[0] === "" || ruits[0] === " " )){
  document.getElementById('msg').style.color="red";
    document.getElementById('msg').style.border = "3px solid red";

$scope.Message= "Please enter data first";
}

else if(fruits.length <= 3 ){
    document.getElementById('msg').style.color="green";
        document.getElementById('msg').style.border = "3px solid green";
$scope.Message= "Enjoy !";
}

else if (fruits.length > 3 ){
    document.getElementById('msg').style.color="green";
        document.getElementById('msg').style.border = "3px solid green";
$scope.Message= "Too much !";

}





}



});


})();
