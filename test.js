(function() {
console.log("hello");
})();


var myApp = angular.module('myApp', []);
myApp.factory('Data', function() {
    return {message: "hello"};
});

myApp.filter('reverse', function() {
    return function(message) {
        return message.split("").reverse().join("");
    };
});

function FirstCtrl($scope, Data) {
    $scope.data = Data;
}

function SecondCtrl($scope, Data) {
    $scope.data = Data;

    $scope.reverse = function(message) {
        return message.split("").reverse().join("");
    };
}
