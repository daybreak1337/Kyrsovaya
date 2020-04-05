function deleteCtrl($http, $location, $routeParams) {
    let vm = this;
    vm.error = '';
    vm.title = "Удаление";
    const id = $routeParams.id;

    vm.formModel = {
        name: {},
        dateStart: {},
        dateFinish: {}
    };

    vm.sendForm = function () {
        vm.error = '';
        console.log('waiting...');
        let p1 = $http.delete('/api/practics/' + id, {
            headers : {
                token: localStorage.getItem('token')
            }
        });

        p1.then(res=>{
            console.log('success!');
            $location.path('/');
        }, err=>{
            vm.error = 'Ошибка: ' + JSON.stringify(err);
            //console.log('error : ', err);
        });
    };

    function init() {
        vm.error = '';
        console.log('waiting...');

        let p1 = $http.get('/api/practics/' + id, {
            headers : {
                token: localStorage.getItem('token')
            }
        });

        p1.then(res=>{
            const oneRow = res.data;
            vm.formModel.name.value = oneRow.name;
            vm.formModel.dateStart.value = new Date(oneRow.dateStart);
            vm.formModel.dateFinish.value = new Date(oneRow.dateFinish);
        }, err=>{
            vm.error = 'Ошибка: ' + JSON.stringify(err);
            //console.log('error: ', err);
        });
    }

    init();


}