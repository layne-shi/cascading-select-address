// Generated by CoffeeScript 1.7.1
(function() {
  var app;

  app = angular.module('app', ['selectAddress']);

  app.controller('appCtrl', function($scope) {
    $scope.p = '广东';
    $scope.c = '梅州';
    $scope.a = '平远县';
    return $scope.d = '大柘镇';
  });

  angular.bootstrap(document, ['app']);

}).call(this);

//# sourceMappingURL=index.map
