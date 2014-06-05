'use strict';

angular.module('bloopi')
  .controller('MainCtrl', function ($scope, $http) {
    // $http.get('/api/awesomeThings').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });
    var socket = io();

    $scope.messages = [];

    $scope.message = {
      user: $scope.currentUser,
      content: "",
      image: "",
    };

    socket.on('chat message', function(msg) {
      console.log(msg);
      $scope.messages.push(msg.user.name + ": " + msg.content);
      $scope.$apply();
    });

    $scope.sendMessage = function() {
      console.log($scope.message);
      socket.emit('post message', $scope.message);
      $scope.message.content = '';
    };
  });
