angular.module('app')
.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$urlRouterProvider,$locationProvider){
	
	$urlRouterProvider.otherwise('/register');

	$stateProvider
		.state('main',{
			url:'',

			abstruct:true,

			templateUrl:'/templates/main/main.html'

		})
		
		
		.state('main.home',{
			url:'/home',
			templateUrl:'/templates/home/home.html'
		})

		.state('main.find',{
			url:'/find',
			templateUrl:'/templates/find/find.html'
		})

		.state('register',{
			url:'/register',
			templateUrl:'/templates/register/register.html',
			cache: false,
			controller:'registerController',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('register');
				}]
			}
		})
		
		

		$locationProvider.html5Mode(true);//html5标准路径模式
}])