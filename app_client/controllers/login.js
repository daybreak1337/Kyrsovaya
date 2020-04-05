function loginCtrl($http, $location, $scope) {

    let vm = this;
    vm.error = '';
    vm.title = "Вход";

    vm.formWasValidated = false;

    vm.formModel = {
        login: {
            valid: true,
            infoText: '',
            value: ''
        },
        password: {
            valid: true,
            infoText: '',
            value: ''
        }
    };

    vm.validate = function () {

        vm.formWasValidated = true;
        const onlyLettersAndDigits = /^([-\.a-zа-яё \d]+)$/i;

        for (let field in vm.formModel){
                vm.formModel[field].valid = onlyLettersAndDigits.test(vm.formModel[field].value);
                vm.formModel[field].infoText = (vm.formModel[field].valid) ? 'Введено верно' : 'Допускаются только буквы и цифры';
                vm.formWasValidated = vm.formWasValidated && vm.formModel[field].valid;
        }
    };

    vm.sendForm = function () {

        vm.error = '';

        console.log('waiting...');
        let p1 = $http.post('/api/login', {
            login: vm.formModel.login.value,
            password: vm.formModel.password.value,
        });

        p1.then(res=>{
            const data = res.data;
            localStorage.setItem('token', data.token);
            $location.path('/');
        }, err=>{
            console.log('error add posecheniya: ', err);
            vm.error = 'Ошибка: ' + JSON.stringify(err);

        });
    }




}