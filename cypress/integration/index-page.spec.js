describe("Index Page Test", () => {
  it("Visit Index Page", () => {
    const WIDTH = 1024
    const HEIGHT = 768

    cy.visit("/")
    cy.viewport(WIDTH, HEIGHT)
    cy.get(".pagesnap-module--page-snap-container--3nLP_")
      .find(".fullpage-module--full-page--AXGF8")
      .its("length")
      .should("be.gt", 3)
    cy.get("footer")
      .scrollIntoView()
      .should("be.visible")
      .should("have.css", "width", WIDTH + "px")
      .should("have.css", "height", HEIGHT + "px")
    cy.get("header .header-module--logo--2PcjR").should("be.visible")
    cy.get("header nav").should("be.visible")
  })
})
