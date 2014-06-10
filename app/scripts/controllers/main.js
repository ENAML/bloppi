'use strict';

angular.module('bloopi')
  .controller('MainCtrl', function ($scope) {

    //setup code
    var socket = io();
    filepicker.setKey("AZJi35K99RVGyLe7OmIeEz");

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

    socket.emit("populate", "population notice");

    $scope.sendMessage = function() {
      //console.log($scope.message);
      socket.emit('post message', $scope.message);
      $scope.message.content = '';
      $scope.message.image = '';
    };

    $scope.uploadImage = function() {
      filepicker.pick({
          mimetypes: ['image/*', 'text/plain'],
          //container: 'window',
          services:['COMPUTER'],
        },
        function(InkBlob){
          console.log(JSON.stringify(InkBlob.url));
          var url = JSON.stringify(InkBlob.url); //remove quotes from string
          $scope.message.image = url.substring(1, url.length-1);
          $scope.$apply();
        },
        function(FPError){
          console.log(FPError.toString());
        }
      );
    };

    // $scope.pickFile = function() {
    //   filepicker.pick(function(InkBlob){
    //     console.log(InkBlob.url);
    //   });
    // };
  });
