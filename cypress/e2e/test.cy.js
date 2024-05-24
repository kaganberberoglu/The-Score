describe('Is the opening page accessible?', () => {

    it('Does the premier league page accessible?', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy=premier-league-test]').click()
        cy.get('[data-cy=premier-league-logo]')
            .should('contain', 'TBL')
    })

    it('Does the bundesliga page accessible?', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy=bundesliga-test]').click()
        cy.get('[data-cy=bundesliga-logo]')
            .should('contain', 'TBL')
    })

    it('Does the premier league home page accessible?', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy=premier-league-test]').click()
        cy.get('[data-cy=premier-league-main-logo]').click()
        cy.get('[data-cy=premier-league-info]')
            .should('contain', 'Choose your players')
    })

    it('Does the premier league table page accessible?', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy=premier-league-test]').click()
        cy.get('[data-cy=premier-league-logo]').click()
        cy.get('[data-cy=premier-league-clubs]')
            .should('contain', 'Arsenal')
    })

    it('Does the players button work in premier league home page?', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy=premier-league-test]').click()
        cy.get('[data-cy=premier-league-players]').click()
        cy.get('[data-cy=premier-league-players-info]')
            .should('contain', 'Erling Haaland')
    })

    it('Does the search box of premier league players page work?', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy=premier-league-test]').click()
        cy.get('[data-cy=premier-league-players]').click()
        cy.get('[data-cy=premier-league-players-search-area]')
            .type('Phil Foden')
        cy.get('[data-cy=premier-league-players-info]')
            .should('contain', 'Phil Foden')
    })

    it('Does the plus button of premier league players page work?', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy=premier-league-test]').click()
        cy.get('[data-cy=premier-league-players]').click()
        cy.get('[data-cy=premier-league-players-search-area]')
            .type('Phil Foden')
        cy.get('[data-cy=premier-league-players-info]')
            .should('contain', 'Phil Foden')
        cy.get('[data-cy=premier-league-plus]').click()
        cy.get('[data-cy=premier-league-number-of-players]')
            .should('contain', '1')
        cy.get('[data-cy=premier-league-players-search-area]').clear()
        cy.get('[data-cy=premier-league-players-search-area]')
            .type('Erling Haaland')
        cy.get('[data-cy=premier-league-players-info]')
            .should('contain', 'Erling Haaland')
        cy.get('[data-cy=premier-league-plus]').click()
        cy.get('[data-cy=premier-league-number-of-players]')
            .should('contain', '2')
    })
})
