'use strict';

describe('my filters', function () {
    var scope;//we'll use this scope in our tests

    //mock Application to allow us to inject our own dependencies
//    beforeEach(angular.mock.module('myApp'));
    beforeEach(module('myApp'));

    //mock the controller for the same reason and include $rootScope and $controller
//    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
    beforeEach(inject(function ($rootScope, $controller) {
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('FirstCtrl', {$scope: scope});
    }));

    // tests start here
    describe('reverse', function() {
        it('plz wurk', inject(function (reverseFilter) {
            expect(reverseFilter("hej")).toEqual("jeh");
        }));
    });

    it('get data"', function () {
        expect(scope.text).toEqual('text');
    });
});