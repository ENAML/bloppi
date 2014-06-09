'use strict';

angular.module('bloopi')
  .controller('MainCtrl', function ($scope, $http) {

    var socket = io();

    $scope.messages = [];

    $scope.message = {
      user: $scope.currentUser, // should use validation (via backend) later
      content: "",
      image: "",
    };

    socket.on('chat message', function(msg) {
      //console.log(msg);
      $scope.messages.push(msg);
      $scope.$apply();
      window.scrollTo(0,document.body.scrollHeight);
    });

    $scope.sendMessage = function() {
      //console.log($scope.message);
      socket.emit('post message', $scope.message);
      $scope.message.content = '';
      $scope.message.image = '';
    };

    // $scope.pickFile = function() {
    //   filepicker.pick(function(InkBlob){
    //     console.log(InkBlob.url);
    //   });
    // };
  });
