'use strict';

angular.module('bloopi')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
