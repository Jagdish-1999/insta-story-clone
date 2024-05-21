/// <reference types="cypress"  />

describe("Instagram stories", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("get user list", () => {
		cy.request("GET", "/api/user-list").its("body").as("UserList");
	});

	it("home page mounted", () => {
		cy.get("[data-cy=instagram]")
			.should("exist")
			.should("have.text", "Instagram");
		cy.get("[data-cy=loading]").should("exist");
	});

	it("user list mounted", () => {
		cy.get("[data-cy=user]")
			.should("exist")
			.click({ multiple: true, force: true });

		cy.get("[data-cy=user-profile-image]").should("exist");
		cy.get("[data-cy=user-name]").should("exist");
	});

	// To Test this feature when loading test case please click on user profile to pass the test cases.
	it("active story image mounted", () => {
		cy.get("[data-cy=story-images]").should("exist");
	});

	// To Test this feature when loading test case please click on user profile to pass the test cases.
	it("active user mounted", () => {
		cy.get("[data-cy=active-user-image]").should("exist");
		cy.get("[data-cy=active-user-name]").should("exist");
		cy.get("[data-cy=posted-time]").should("exist");
		cy.get("[data-cy=left-icons]").should("exist");
		cy.get("[data-cy=right-icons]").should("exist");
	});

	// To Test this feature when loading test case please click on user profile to pass the test cases.
	it("navigation's mounted", () => {
		cy.get("[data-cy=prev-navigation]").should("exist").click();
		cy.get("[data-cy=next-navigation]").should("exist").click();
	});
});
