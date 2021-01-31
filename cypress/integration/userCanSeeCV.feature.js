
describe('Can navigate to My Cv', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'),
    cy.get('#cv-tab').click(),
    cy.url().should("contain", "cv")
  });

  it('displays a riddle', () => {
    cy.get('.cv-form').within(() => {
      cy.get('.cv-img').should('exist'),
      cy.get('[type=password]').should('exist')
      cy.get('[type=submit]').should('exist')
    })
  })

  describe('riddle can be solved', () => {
    
    it('solves on correct password', () => {
      cy.get('.cv-form').within(() => {
        cy.get('[type=password]').type("gin")
        cy.get('[type=submit]').click()
      })
    })
  })

  describe('displays CV after correct password', () => {
    beforeEach(() => {
      cy.get('.cv-form').within(() => {
        cy.get('[type=password]').type("gin")
        cy.get('[type=submit]').click()
      })
    })

    it('can see CV card', () => {
      cy.get('.ui .card').within(() => {
        cy.get('.image').should('exist'),
        cy.get('.content').within(() => {
          cy.get('.header').should('contain', 'Curriculum Vitae'),
          cy.contains('Something about jobs').should('exist'),
          cy.contains('Something about education').should('exist')
        })
      })
    })
      
  })
    
  

  
})