class Login{
    setEmail(email){
        cy.get("#email").type(email);
    }
    setPassword(password){
        cy.get("#password").type(password);
    }
    clickSignIn(){
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > button:nth-child(1)").click();
    }
    verifyLogin(){
        cy.get('body div div div div div h1').should('have.text', 'Dashboard')
    }
}

export default Login;