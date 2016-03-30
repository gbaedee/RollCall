/**
 * Created by baede on 3/22/2016.
 */
angular
    .module('app',[
        'ngRouter'
    ])
    .config(function ($RouterProvider) {
       $RouterProvider
           .when ('/',{
               templateUrl: 'Views/Register.html',
               controller: 'RegisterCtrl',
               controllerAs: 'Register'
           })
           .when ('/courseSelection',{
               templateUrl: 'Views/courseSelection.html',
               controller: 'courseSelectionCtrl',
               controllerAs: 'courseSelection'
           })
           .when ('/BIOL13204',{
               templateUrl: 'Views/BIOL13204.html',
               controller: 'BIOL13204Ctrl',
               controllerAs: 'BIOL13204'
           })
           .when ('/BIOL23201',{
               templateUrl: 'Views/BIOL23201.html',
               controller: 'BIOL23201Ctrl',
               controllerAs: 'BIOL23201'
           })
           .when ('/CS116WE1',{
               templateUrl: 'Views/CS116WE1.html',
               controller: 'CS116WE1Ctrl',
               controllerAs: 'CS116WE1'
           })
           .when ('/CS12401',{
               templateUrl: 'Views/CS12401.html',
               controller: 'CS12401Ctrl',
               controllerAs: 'CS12401'
           })
           .otherwise({
               redirectTo:'/'
           })
    })