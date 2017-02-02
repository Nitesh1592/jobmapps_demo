app.config(function($routeProvider) {
      
    $routeProvider.
      when('/', {
        title: 'Home',
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      })
      .when('/about-us', {
        title: 'About Us',
        templateUrl: 'partials/about.html',
        controller: 'aboutCtrl'
      })
      .when('/edit-customer/:customerID', {
        title: 'Edit Customers',
        templateUrl: 'partials/edit-customer.html',
        controller: 'editCtrl',
        resolve: {
          customer: function(services, $route){
            var customerID = $route.current.params.customerID;
            return services.getCustomer(customerID);
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
      //if (window.history && window.history.pushState) {
//          $locationProvider.html5Mode({
//              enabled : true,
//              requireBase : false
//          }).hashPrefix('');
      //}
    // use the HTML5 History API
    
});
app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);