function listCtrl($http, $location, $rootScope) {


    let vm = this;
    vm.title = "Список посещений";

    let p1 = $http.get('/api/posecheniya', {
        headers : {
            token: localStorage.getItem('token')
        }
    });

    //

    p1.then(res=>{
        vm.list = res.data;
    }, err=>{
        $location.path('/login');
    });

    console.log('hello!');


    vm.test = localStorage.getItem('test');

}