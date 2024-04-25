import Login from "..//PageObjects//LoginPage";

describe('Profile and Settings Change', ()=>{
    it('user can update profile', ()=>{
        cy.visit('https://complyvantage.com/signin')
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > button:nth-child(1)").click();
        cy.fixture('complyvantage').then((data) =>{
            const loginPage = new Login();
            loginPage.setEmail(data.email);
            loginPage.setPassword(data.password);
            loginPage.clickSignIn();
            loginPage.verifyLogin();
        })
        cy.wait(1000)
        cy.get ("div[class='flex items-center gap-2 cursor-pointer p-1 hover:bg-slate-300 rounded-lg'] div[class='MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-17o22dy-MuiAvatar-root']").click()
        cy.wait(1000)
        cy.get("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > a:nth-child(1)").click()
        cy.wait(1000)
        cy.url().should('contain','https://complyvantage.com/profile')
        cy.get("button[type='button']").click()
        cy.get("#firstName").clear().type("hey")
        cy.get("#lastName").clear().type("there")
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > form:nth-child(1) > div:nth-child(4) > button:nth-child(1)").click()
       
    })
    it.only('user can update settings', ()=>{
        cy.visit('https://complyvantage.com/signin')
        cy.fixture('complyvantage').then((data) =>{
            const loginPage = new Login();
            loginPage.setEmail(data.email);
            loginPage.setPassword(data.password);
            loginPage.clickSignIn();
            loginPage.verifyLogin();
            cy.wait(1000)
        cy.get("div[class='flex items-center gap-2 cursor-pointer p-1 hover:bg-slate-300 rounded-lg'] div[class='MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-17o22dy-MuiAvatar-root']").click();
        cy.wait(1000)
        cy.xpath("//div/a[normalize-space()='Profile']/following-sibling::a[1]").click()
        cy.wait(1000)
        cy.url().should('contain','https://complyvantage.com/settings')
        })
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-none.MuiButton-nonePrimary.MuiButton-sizeMedium.MuiButton-noneSizeMedium.MuiButton-root.MuiButton-none.MuiButton-nonePrimary.MuiButton-sizeMedium.MuiButton-noneSizeMedium.css-ls50z0-MuiButtonBase-root-MuiButton-root").click()
        cy.get("#password").clear().type("Comply!vantage100")
        cy.get("#newPasswordAgain").clear().type("Comply!vantage100")
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > form:nth-child(1) > div:nth-child(4) > button:nth-child(1)").click()
       
    })
})


