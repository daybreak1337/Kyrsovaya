function deleteCtrl($http, $location, $routeParams) {
    let vm = this;
    vm.error = '';
    vm.title = "Удаление";
    const id = $routeParams.id;

    vm.formModel = {
        fio: {},
        datePosesh: {},
        dateofbirth: {}
    };

    vm.sendForm = function () {
        vm.error = '';
        console.log('waiting...');
        let p1 = $http.delete('/api/posecheniya/' + id, {
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

        let p1 = $http.get('/api/posecheniya/' + id, {
            headers : {
                token: localStorage.getItem('token')
            }
        });

        p1.then(res=>{
            const oneRow = res.data;
            vm.formModel.fio.value = oneRow.fio;
            vm.formModel.datePosesh.value = new Date(oneRow.datePosesh);
            vm.formModel.dateofbirth.value = new Date(oneRow.dateofbirth);
        }, err=>{
            vm.error = 'Ошибка: ' + JSON.stringify(err);
            //console.log('error: ', err);
        });
    }

    init();


}