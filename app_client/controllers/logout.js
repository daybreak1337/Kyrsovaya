function logoutCtrl($http, $location) {

    localStorage.removeItem('token');
    $location.path('/');

}