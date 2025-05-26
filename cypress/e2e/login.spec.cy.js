describe('ORANGE HRM Tests', () => {

  const seletorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongcredentialAlert: "[role='alert']"
  }

  it('login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(seletorsList.usernameField).type('Admin')
    cy.get(seletorsList.passwordField).type('admin123')
    cy.get(seletorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(seletorsList.sectionTitleTopBar).contains('Dashboard')
  })

  it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(seletorsList.usernameField).type('Test')
    cy.get(seletorsList.passwordField).type('test')
    cy.get(seletorsList.loginButton).click()
    cy.get(seletorsList.wrongcredentialAlert)
  })
})