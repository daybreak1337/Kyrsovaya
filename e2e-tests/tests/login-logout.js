'use strict';

function syncTest(cb){
    return new Promise(resolve => {
        cb();
        setTimeout(()=>{
            resolve(true);
        },3000);
    });
}

describe('login 1', () => {
    it('Попытка входа должна быть неудачной', async () => {

        await syncTest(()=>{
            browser.get('/#!/login');
        });

        await syncTest(()=>{
            element(by.model('vm.formModel.login.value')).clear().sendKeys('userQWQEWAWRFASWRF');
        });

        await syncTest(()=>{
            element(by.model('vm.formModel.password.value')).clear().sendKeys('123456');
        });

        await syncTest(()=>{
            element(by.css('body > div > div > div > form > button')).click();
        });

        await syncTest(()=>{
            expect(element(by.css('body > div > div > div > div')).getText()).toContain('error');
        });

    });
});

describe('login 2', () => {
    it('Попытка входа должна быть удачной', async () => {

        await syncTest(()=>{
            browser.get('/#!/login');
        });

        await syncTest(()=>{
            element(by.model('vm.formModel.login.value')).clear().sendKeys('user');
        });

        await syncTest(()=>{
            element(by.model('vm.formModel.password.value')).clear().sendKeys('123456');
        });

        await syncTest(()=>{
            element(by.css('body > div > div > div > form > button')).click();
        });

        await syncTest(()=>{
            expect(element(by.css('body > div > div > h2')).getText()).toContain('Список практик');
        });
    });
});

describe('logout 1', () => {
    it('Выход должен быть удачным', async () => {

        await syncTest(()=>{
            browser.get('/#!/logout');
        });

        await syncTest(()=>{
            expect(element(by.css('body > div > div > div > h2')).getText()).toContain('Вход');
        });
    });
});

describe('logout 2', () => {
    it('Выход должен быть удачным', async () => {

        await syncTest(()=>{
            browser.get('/#!/login');
        });

        await syncTest(()=>{
            element(by.model('vm.formModel.login.value')).clear().sendKeys('user');
        });

        await syncTest(()=>{
            element(by.model('vm.formModel.password.value')).clear().sendKeys('123456');
        });

        await syncTest(()=>{
            element(by.css('body > div > div > div > form > button')).click();
        });

        await syncTest(()=>{
            element(by.css('#super-menu > li:nth-child(3) > a')).click();
        });

        await syncTest(()=>{
            expect(element(by.css('body > div > div > div > h2')).getText()).toContain('Вход');
        });
    });
});