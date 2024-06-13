describe("template spec", () => {
  // it, setiap test
  it("passes", () => {
    cy.visit("http://localhost:5137");

    const emailInput = cy.get("input[role=emailInput]");
    const passwordInput = cy.get("input[role=passwordInput]");
    const loginBtn = cy.get("button[role=loginBtn]");

    emailInput.type("email...");
    passwordInput.type("secret123");

    loginBtn.click();

    cy.get("[role=emailValidation]").should("exist");
    // cy.get("[role=passwordValidation]").should("exist");
  });
});
