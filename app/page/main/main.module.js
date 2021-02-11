'use strict';

var app = angular.module('MainPage', ["ngRoute"]);

app.controller("PageController", function ($scope) {
    $scope.headerTitle = "Katalog Fasashop";
});