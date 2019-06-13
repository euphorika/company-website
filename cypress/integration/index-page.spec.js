describe("Index Page Test", () => {
  it("Visit Index Page", () => {
    cy.visit("/")
    cy.get(".pagesnap-module--page-snap-container--3nLP_")
      .find(".fullpage-module--full-page--AXGF8")
      .its("length")
      .should("be.gt", 3)
    cy.get("footer")
      .scrollIntoView()
      .should("be.visible")
    cy.get("header .header-module--logo--2PcjR").should("be.visible")
    cy.get("header nav").should("be.visible")
  })
})
