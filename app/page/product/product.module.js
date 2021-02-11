'use strict';

var app = angular.module('ProductDetail', ["ngRoute"]);

app.controller('ProductController', function ($scope) {
    $scope.name = "nama produk";
    $scope.price = "Rp harga";
    $scope.photo = "img/icon.png";
});