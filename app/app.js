    // Inject the dependencies here if required by the module
// namespacing

var myResumeApplication = angular.module('myResumeApplication',['ngRoute','ngAnimate']);

myResumeApplication.config(['$routeProvider',function($routeProvider){

    $routeProvider.when('/home',{
        templateUrl: 'views/home.html',
        controller : 'HomeController'
    })
    .when('/about',{
        templateUrl: 'views/about.html',
        controller : 'AboutController'
    })
    .when('/skills',{
        templateUrl: 'views/skills.html',
        controller : 'SkillsController'
    })
    .when('/portfolio',{
        templateUrl : 'views/portfolio.html',
        controller : 'PortfolioController'
    })
    .when('/contact',{
        templateUrl : 'views/contact.html',
        controller : 'ContactController'
    })
    .when('/thanks',{
        templateUrl : 'views/thanks.html',
        controller : 'ContactController'
    })
    .otherwise({
        redirectTo : '/home'
    });
}]);


myResumeApplication.controller('HomeController',['$scope','$http',function($scope,$http){

    $scope.image = 'content/images/banner-bg.jpg';
    $scope.slides = [
        {
            profession: 'Webdesigner',
            description : 'Amazing free responsive website for free, enjoy!!!'
        },
        {
            profession: 'UX/UI Developer',
            description : 'I develop website using Bootstrap front-end framework..'
        },
        {
            profession: 'HTML5/CSS3',
            description : 'HTML5 is a markup language used for structuring and presenting Web.'
        },
        {
            profession: 'JavaScript/jQuery',
            description : 'jQuery: Write Less, Do More...'
        },
    ];

}]);

myResumeApplication.controller('AboutController',['$scope','$http',function($scope,$http){
    $scope.intro = 'I am Prateek Madaan, Full stack,MEVN stack Developer works with AngularJS as well.'
    $http.get('data/abouts.json').then(response => $scope.abouts = response.data);
    // console.log(angular.toJson($scope.abouts));
    $scope.quote = 'Strength does not come from physical capacity. It comes from an indomitable will.';
    $scope.quotedBy = 'Mahatma Gandhi';

}]);

myResumeApplication.controller('SkillsController',['$scope','$http',function($scope,$http){
    
    $http.get('data/skills.json')
    .then(response => $scope.skills = response.data);
    // console.log(angular.toJson($scope.skills));
    // $scope.skills.forEach(skill => {
    //     skill.skillProportion = parseFloat(skill.skillProportion);
    // });

    $http.get('data/addons.json')
    .then(response => $scope.addons = response.data);
    // console.log(angular.toJson($scope.addons));

}]);

myResumeApplication.controller('ContactController',['$scope','$http','$location',function($scope,$http,$location){
    //contact init config
    $scope.contact = {
        name : '',
        email : '',
        message : ''
    }
    $scope.contactMe = () =>  $location.path('thanks');
    
}]);

