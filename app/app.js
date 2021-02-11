'use strict';

angular.module('fasashopApp', ["ngRoute", "ProductDetail", "MainPage"]);

angular.module('fasashopApp').config(function ($routeProvider) {
  $routeProvider
      .when("/", {
          templateUrl: '/page/main/main.template.html'
      })
      .when("/produk", {
        templateUrl : '/page/product/product.template.html'
      });
});

angular.module('fasashopApp').controller('CatalogController', function CatalogController($scope) {
  $scope.logo = "/img/icon.png";
  $scope.name = "Fasashop Catalog";
});