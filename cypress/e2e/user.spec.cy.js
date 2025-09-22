import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import dashboardPage from '../pages/dashboardPage'
import menuPage from '../pages/menuPage'
import myinfoPage from '../pages/myinfoPage'

const loginPage = new LoginPage()
const DashboardPage = new dashboardPage()
const MenuPage = new menuPage()
const MyinfoPage = new myinfoPage()

describe('ORANGE HRM Tests', () => {

  it.only('User Info Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    DashboardPage.verifyDashboardPage()

    MenuPage.accessMyInfo()

    MyinfoPage.fillPersonalDetails()
  })

  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongcredentialAlert)
  })
})