(function () {
    console.log("helloz!!!");
})();

var myApp = angular.module('myApp', []);

myApp.factory('Data', function () {
    return {message: "hello"};
});

myApp.filter('reverse', function () {
    return function (message) {
        return message.split("").reverse().join("");
    };
});

myApp.controller('FirstCtrl', function FirstCtrl($scope, Data) {
    $scope.data = Data;
    $scope.text = 'text';
});

myApp.controller('SecondCtrl', function SecondCtrl($scope, Data) {
    $scope.data = Data;

    $scope.myReverse = function (message) {
        return message.split("").reverse().join("");
    };
});
