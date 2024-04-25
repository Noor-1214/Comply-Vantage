import Login from "..//PageObjects//LoginPage";

describe('Login Tests', () => {
    const loginPage = new Login();
  beforeEach(() => {
    cy.visit('https://complyvantage.com/signin');
  });

  it ('should display sign-in page elements', () => {
            cy.get('#email').should('exist');
            cy.get('#password').should('exist');
            cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > button:nth-child(1)').should('exist');
});

  it.only('should login with valid credentials and display error message for invalid credentials', () => {
    cy.fixture('CV').then((testData) => {
      
      testData.forEach((data) => {
        cy.visit('https://complyvantage.com/signin')
        loginPage.setEmail(data.email);
        loginPage.setPassword(data.password);
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > button:nth-child(1)').click();

        if (data.valid) {
          loginPage.verifyLogin();
        } else {
            cy.get('#email').should('exist');
            cy.get('#password').should('exist');
        }
      });
    });
  });

  it('should display error messages for blank credentials', () => {
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > button:nth-child(1)').click();
    cy.get('#email').should('exist');
    cy.get('#password').should('exist');  
  });
});
