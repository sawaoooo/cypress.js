describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цветы кнопки восстанови пароль

         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нажал вошел

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // текст виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден для пользователея

     })

     it('Проверка восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цветы кнопки восстанови пароль

        cy.get('#forgotEmailButton').click(); // нажал востановить
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввожу емаил
        cy.get('#restoreEmailButton').click(); // отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден для пользователея

    })

     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цветы кнопки восстанови пароль

        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // ввели НЕверный пароль
        cy.get('#loginButton').click(); // нажал вошел

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден для пользователея

    })

    it('НЕверный ЛОГИН верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цветы кнопки восстанови пароль

        cy.get('#mail').type('sherman@dolnikos.com'); // ввели НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал вошел

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден для пользователея

    })

    it('Проверка что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цветы кнопки восстанови пароль

        cy.get('#mail').type('germandolnikov.ru'); // ввели НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал вошел

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден для пользователея

    })

    it('Напиши проверку на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цветы кнопки восстанови пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // верный логин со строчными букв.
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал вошел

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден для пользователея

    })
    
 }) 

 // найти поле логин ввести правильный логин
 // найти поле пароль ввести правильный пароль
 // найти кнопку войти нажать войти
 // проверить успешную авторизацию