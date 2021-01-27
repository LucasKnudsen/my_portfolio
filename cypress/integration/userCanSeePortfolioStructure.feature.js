
describe ("Portfolio interface", () => {
    it("successfully renders", () => {
        cy.visit("http://localhost:3000");
        cy.get("#home").should("contain", "My Portfolio");
        cy.get("#footer").should("contain", "Made with React");
        cy.get("#hello").should("contain", "Hello World");
    })
})