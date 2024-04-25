import Login from "..//PageObjects//LoginPage";

describe ('Signing out of website', ()=> {
    it.only ('signout', ()=> {
            cy.visit("https://complyvantage.com/")
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
        cy.get("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > a:nth-child(3)").click()
        cy.wait(1000)
        cy.url().should('contains',"https://complyvantage.com/signin")
    })
    })