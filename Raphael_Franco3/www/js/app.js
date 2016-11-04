angular.module('mySuperApp', ['ionic'])
.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

 // Triggered on a button click, or some other target
 $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<input type="password" ng-model="data.wifi">',
     title: 'Meu nome é:',
     subTitle: 'Raphael Franco Borges Faria',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-assertive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
   }, 3000);
  };
   // A confirm dialog
   $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Consumir Sorvete',
       template: 'Você tem certeza que quer comer esse sorvete?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('sim');
       } else {
         console.log('não');
       }
     });
   };

   // An alert dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Não coma isto!!!!',
       template: 'Isto pode ser saboroso.'
     });
     alertPopup.then(function(res) {
       console.log('Obrigado por me comprar um sorvete');
     });
   };
});