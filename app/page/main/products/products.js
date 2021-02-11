'use strict';

angular.module('fasashopApp').controller('ProductsController', function($scope) {
  $scope.items = [{
    title: 'Poppin\'Party',
    price: 'Rp ' + '250.000',
    photo: '/img/poppin.png'
  }, {
    title: 'Afterglow',
    price: 'Rp ' + '250.000',
    photo: '/img/afterglow.svg'
  }, {
    title: 'Pastel*Palettes',
    price: 'Rp ' + '250.000',
    photo: '/img/pastel.svg'
  }, {
    title: 'Roselia',
    price: 'Rp ' + '250.000',
    photo: '/img/rose.svg'
  }, {
    title: 'Hello, Happy World!',
    price: 'Rp ' + '250.000',
    photo: '/img/hhw.svg'
  }];
});
