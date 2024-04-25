describe('Signup Tests', ()=>{
    it('should display sign-in page elements', () => {
        cy.visit ('https://complyvantage.com/signup')
        cy.get('#firstName').should('exist');
        cy.get('#lastName').should('exist');
        cy.get('#email').should('exist');
        cy.get('#password').should('exist');
        cy.get('#passwordAgain').should('exist');
        cy.get("input[type='checkbox']").should('exist');
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(7) > button:nth-child(1)").should('exist');
    });

     // Enter valid credentials and submit
    it('should sign up with valid credentials', () => {
        cy.visit ('https://complyvantage.com/signup')
        cy.get('#firstName').type('comply');
        cy.get('#lastName').type('vantage');
        cy.get('#email').type('complyvantage123@gmail.com');
        cy.get('#password').type('Valid_password1');
        cy.get('#passwordAgain').type('Valid_password1');
        cy.get("input[type='checkbox']").click();
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(7) > button:nth-child(1)").click();
        cy.url().should('contain','https://complyvantage.com/signin')
      });

    // Enter invalid Email and submit
    it('should display error message for invalid Email', () => {
        cy.visit ('https://complyvantage.com/signup')
        cy.get('#firstName').type('comply');
        cy.get('#lastName').type('vantage');
        cy.get('#email').type('invalid_username@com');
        cy.get('#password').type('Valid_password1');
        cy.get('#passwordAgain').type('Valid_password1');
        cy.get("input[type='checkbox']").click();
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(7) > button:nth-child(1)").click();
        cy.contains("Email address must be a valid email address.").should('be.visible');
      });

    // Enter invalid Password and submit
    it('should display error message for invalid Email', () => {
        cy.visit ('https://complyvantage.com/signup')
        cy.get('#firstName').type('comply');
        cy.get('#lastName').type('vantage');
        cy.get('#email').type('invalid_username@gmail.com');
        cy.get('#password').type('Valid_password1');
        cy.get('#passwordAgain').type('Valid_password');
        cy.get("input[type='checkbox']").click();
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(7) > button:nth-child(1)").click();
        cy.contains("Email address must be a valid email address.").should('be.visible');
      });

     // Submit form with blank fields    
      it.only('should display error messages for blank credentials', () => {
        cy.visit('https://complyvantage.com/signup')
        cy.get('.cl-formButtonPrimary.🔒️.cl-internal-1fsg6zy').click();

        cy.get('#emailAddress-field').then(($emailField) => {
          const emailValue = $emailField.val();
          cy.get('#password-field').then(($passwordField) => {
            const passwordValue = $passwordField.val();
        if (!emailValue || !passwordValue) {
          cy.get(".cl-headerTitle.🔒️.cl-internal-1vbdq0x").should('have.text', 'Create your account');
        } 
        else {
          cy.get('.cl-headerTitle.🔒️.cl-internal-1vbdq0x').should('have.text','Verify your email')
        }
      });
    });
})
})