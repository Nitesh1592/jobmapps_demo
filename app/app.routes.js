app.config(function($routeProvider) {
      
    $routeProvider.
      when('/', {
        title: 'Home',
        templateUrl: 'components/home/homeview.html',
        controller: 'homecontroller'
      })
      .when('/about-us', {
        title: 'About Us',
        templateUrl: 'components/static_page/about.html',
        controller: 'staticPageCtrl'
      })
      .when('/contact-us', {
        title: 'Contact Us',
        templateUrl: 'components/static_page/contact.html',
        controller: 'staticPageCtrl'
      })
      .when('/blog', {
        title: 'Blogs',
        templateUrl: 'components/blog/blog-list.html'
      })
      .when('/detail-blog/:blogId', {
        title: 'Blogs',
        templateUrl: 'components/blog/detail-blog.html'
      })
      .when('/job-list', {
        title: 'Job List',
        templateUrl: 'components/job-board/joblisting.html'
      })
      .when('/job-detail/:blogId', {
        title: 'Blogs',
        templateUrl: 'components/job-board/job-detail.html'
      })
      .when('/register', {
        title: 'Register',
        templateUrl: 'components/Register/Register.html'
      })
      .when('/sign-in', {
        title: 'Sign in',
        templateUrl: 'components/Register/sign-in.html'
      })
      .when('/job-list', {
        title: 'Job List',
        templateUrl: 'components/job-board/joblisting.html'
      })
      .when('/post-job', {
        title: 'Job List',
        templateUrl: 'components/job-board/post-job.html'
      })
      .when('/post-resume', {
        title: 'Job List',
        templateUrl: 'components/Resume/post-resume.html'
      })
//      .when('/edit-customer/:customerID', {
//        title: 'Edit Customers',
//        templateUrl: 'partials/edit-customer.html',
//        controller: 'editCtrl',
//        resolve: {
//          customer: function(services, $route){
//            var customerID = $route.current.params.customerID;
//            return services.getCustomer(customerID);
//          }
//        }
//      })
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
        $rootScope.baseurl = 'http://localhost/jobmaps_demo/app/';
        $rootScope.title = current.$$route.title;
    });
}]);