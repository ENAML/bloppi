'use strict';

angular.module('personalprojectwithgenApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
