
// Config our App-Routing
app.config(function($routeProvider) {
  $routeProvider
  .when('/standortabteilung', { templateUrl: 'pages/Standort_Abteilung.html' })
  	.when('/login', { templateUrl: 'pages/login.html'})
    .when('/home', { templateUrl: 'pages/home.html' })
    .when('/settings', { templateUrl: 'pages/settings.html' })  
    .when('/', { templateUrl: 'pages/home.html'})
    .otherwise({ redirectTo: '/' });
});


app.run(['$route', function($route)  {
	  $route.reload();
	}]);

