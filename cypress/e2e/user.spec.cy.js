import userData from '../fixtures/user-data.json'

describe('ORANGE HRM Tests', () => {

  const seletorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongcredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }

  it.only('User Info Update - success', () => {

    cy.visit('/auth/login')
    cy.get(seletorsList.usernameField).type(userData.userSuccess.username)
    cy.get(seletorsList.passwordField).type(userData.userSuccess.password)
    cy.get(seletorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(seletorsList.sectionTitleTopBar).contains('Dashboard')
    cy.get(seletorsList.myInfoButton).click()
    cy.get(seletorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(seletorsList.lastNameField).clear().type('LastNameTest')
    cy.get(seletorsList.genericField).eq(3).clear().type('Employee')
    cy.get(seletorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(seletorsList.genericField).eq(5).clear().type('DriversLicenseTest')
    cy.get(seletorsList.genericField).eq(7).clear().type('2025-03-10')
    cy.get(seletorsList.dateCloseButton).click()
    cy.get(seletorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })

  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(seletorsList.usernameField).type('Test')
    cy.get(seletorsList.passwordField).type('test')
    cy.get(seletorsList.loginButton).click()
    cy.get(seletorsList.wrongcredentialAlert)
  })
})