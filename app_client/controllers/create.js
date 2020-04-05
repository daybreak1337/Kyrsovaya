function createCtrl($http, $location) {
    let vm = this;
    vm.error = '';
    vm.title = "Добавление";


    vm.formWasValidated = false;

    vm.formModel = {
        fio: {
            valid: true,
            infoText: '',
            value: ''
        },
        adress: {
            valid: true,
            infoText: '',
            value: ''
        },
        doctor: {
            valid: true,
            infoText: '',
            value: ''
        },
        snils: {
            valid: true,
            infoText: '',
            value: ''
        },
        passport: {
            valid: true,
            infoText: '',
            value: ''
        },
        datePosesh: {
            valid: true,
            infoText: '',
            value: new Date()
        },
        dateofbirth: {
            valid: true,
            infoText: '',
            value: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000)
        }
    };

    vm.validate = function () {

        vm.formWasValidated = true;
        const onlyLettersAndDigits = /^([-\.a-zа-яё \d]+)$/i;

        for (let field in vm.formModel){
            if(field!=='datePosesh' && field!=='dateofbirth'){
                vm.formModel[field].valid = onlyLettersAndDigits.test(vm.formModel[field].value);
                vm.formModel[field].infoText = (vm.formModel[field].valid) ? 'Введено верно' : 'Допускаются только буквы и цифры';
                vm.formWasValidated = vm.formWasValidated && vm.formModel[field].valid;
            }
        }
    };

    vm.sendForm = function () {

        vm.error = '';

        console.log('waiting...');
        let p1 = $http.post('/api/practics', {
            fio: vm.formModel.fio.value,
            adress: vm.formModel.adress.value,
            doctor: vm.formModel.doctor.value,
            snils: vm.formModel.snils.value,
            passport: vm.formModel.passport.value,
            datePosesh: vm.formModel.datePosesh.value,
            dateofbirth: vm.formModel.dateofbirth.value,
            marker: 0
        }, {
            headers : {
                token: localStorage.getItem('token')
            }
        });

        p1.then(res=>{
            console.log('success!');
            $location.path('/');
        }, err=>{
            vm.error = 'Ошибка: ' + JSON.stringify(err);
            //console.log('error add practic: ', err);
        });
    }




}