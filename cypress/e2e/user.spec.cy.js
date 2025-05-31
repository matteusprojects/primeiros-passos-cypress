import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import dashboardPage from '../pages/dashboardPage'
import menuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const DashboardPage = new dashboardPage()
const MenuPage = new menuPage()

describe('ORANGE HRM Tests', () => {

  const selectorsList = {    
    
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    genericCombobox: ".oxd-select-text--arrow",
    secondItemCombobox: ".oxd-select-dropdown > :nth-child(27)",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(4)",
    fourthItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
    fifthItemCombobox: ".oxd-select-dropdown > :nth-child(9)",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
  }

  it.only('User Info Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    DashboardPage.verifyDashboardPage()

    MenuPage.accessMyInfo()
  
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericField).eq(7).clear().type('2025-03-10')
    cy.get(selectorsList.genericField).eq(8).clear().type('1199956565')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click({ force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

    cy.get(selectorsList.genericCombobox).eq(0).click({ force: true})
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click({ force: true})
    cy.get(selectorsList.thirdItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(2).click({ force: true})
    cy.get(selectorsList.fourthItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(3).click({ force: true})
    cy.get(selectorsList.fifthItemCombobox).click()
  })

  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongcredentialAlert)
  })
})