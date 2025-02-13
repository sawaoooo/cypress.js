describe('avatar pokemon kupi', function () {

    it('покупаем аватар', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get('input[type="email"]').type('User-login');
         cy.get('input[type="password"]').type('User-password');
         cy.get('button[type="submit"]').click(); // кнопка войти
         cy.wait(1500);
         cy.get('.header__container > .header__id').click({ force: true }); // force: true избавляет от конфликта
         cy.get('[href="/shop"]').click();
         cy.get('.available > button').first().click({ force: true });
         cy.get('.credit').type('4620869113632996');
         cy.get('.k_input_ccv').type('125');
         cy.get('.k_input_date').type('0625');
         cy.get('.k_input_name').type('INDEEC');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.contains('Покупка прошла успешно').should('be.visible');
         cy.get('.payment__adv').click();

     })
 }) 
