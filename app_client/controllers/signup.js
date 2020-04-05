function signupCtrl($http, $location) {

    let vm = this;
    vm.error = '';
    vm.title = "Регистрация";

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
        },
        password2: {
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

        if(vm.formModel.password.value !== vm.formModel.password2.value){
            vm.formModel.password.valid = false;
            vm.formModel.password2.valid = false;
            vm.formModel.password.infoText = "Пароли не совпадают";
            vm.formModel.password2.infoText = "Пароли не совпадают";
        }

        vm.formWasValidated = vm.formWasValidated && vm.formModel.password.value === vm.formModel.password2.value;


    };

    vm.sendForm = function () {

        vm.error = '';

        console.log('waiting...');
        let p1 = $http.post('/api/signup', {
            login: vm.formModel.login.value,
            password: vm.formModel.password.value,
        });

        p1.then(res=>{
            //const data = res.data;
            $location.path('/login');
        }, err=>{
            console.log('error add posecheniya: ', err);
            vm.error = 'Ошибка: ' + JSON.stringify(err);
        });
    }




}