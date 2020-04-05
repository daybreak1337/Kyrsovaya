function updateCtrl($http, $location, $routeParams) {
    let vm = this;
    vm.error = '';
    vm.title = "Изменение";
    const id = $routeParams.id;


    vm.formWasValidated = false;

    vm.formModel = {
        name: {
            valid: true,
            infoText: '',
            value: ''
        },
        address: {
            valid: true,
            infoText: '',
            value: ''
        },
        doctor: {
            valid: true,
            infoText: '',
            value: ''
        },
        group: {
            valid: true,
            infoText: '',
            value: ''
        },
        spec: {
            valid: true,
            infoText: '',
            value: ''
        },
        dateStart: {
            valid: true,
            infoText: '',
            value: new Date()
        },
        dateFinish: {
            valid: true,
            infoText: '',
            value: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000)
        }
    };

    vm.validate = function () {

        vm.formWasValidated = true;
        const onlyLettersAndDigits = /^([-\.a-zа-яё \d]+)$/i;

        for (let field in vm.formModel){
            if(field!=='dateStart' && field!=='dateFinish'){
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
            name: vm.formModel.name.value,
            address: vm.formModel.address.value,
            doctor: vm.formModel.doctor.value,
            group: vm.formModel.group.value,
            spec: vm.formModel.spec.value,
            dateStart: vm.formModel.dateStart.value,
            dateFinish: vm.formModel.dateFinish.value,
            mark: 0
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
            vm.formModel.name.value = oneRow.name;
            vm.formModel.address.value = oneRow.address;
            vm.formModel.doctor.value = oneRow.doctor;
            vm.formModel.group.value = oneRow.group;
            vm.formModel.spec.value = oneRow.spec;
            vm.formModel.dateStart.value = new Date(oneRow.dateStart);
            vm.formModel.dateFinish.value = new Date(oneRow.dateFinish);
            vm.validate();
        }, err=>{
            vm.error = 'Ошибка: ' + JSON.stringify(err);
            //console.log('error add practic: ', err);
        });
    }

    init();


}