class myinfoPage {

    selectorsList() {
        const selectors = {
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

        return selectors
    }

    completeMyInfo() {
        cy.get(this.selectorsList().firstNameField).clear().type('FirstNameTest')
        cy.get(this.selectorsList().lastNameField).clear().type('LastNameTest')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('Employee')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('OtherIdTest')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('DriversLicenseTest')
        cy.get(this.selectorsList().genericField).eq(7).clear().type('2025-03-10')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type('1199956565')
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default myinfoPage