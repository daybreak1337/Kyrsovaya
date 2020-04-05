function updateCtrl($http, $location, $routeParams) {
    let vm = this;
    vm.error = '';
    vm.title = "Изменение";
    const id = $routeParams.id;


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
        let p1 = $http.put('/api/practics/' + id, {
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
            //console.log('success!');
            const oneRow = res.data;
            vm.formModel.fio.value = oneRow.fio;
            vm.formModel.adress.value = oneRow.adress;
            vm.formModel.doctor.value = oneRow.doctor;
            vm.formModel.snils.value = oneRow.snils;
            vm.formModel.passport.value = oneRow.passport;
            vm.formModel.datePosesh.value = new Date(oneRow.datePosesh);
            vm.formModel.dateofbirth.value = new Date(oneRow.dateofbirth);
            vm.validate();
        }, err=>{
            vm.error = 'Ошибка: ' + JSON.stringify(err);
            //console.log('error add practic: ', err);
        });
    }

    init();


}