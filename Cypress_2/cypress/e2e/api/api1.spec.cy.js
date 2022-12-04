describe.only("API test", () => {
    let pet = {};
    const PET_ID = 22020202002;
    const PET_NAME = "katze";
  
    it("Create", () => {
      cy.request({
        method: "POST",
        url: "https://petstore.swagger.io/v2/pet",
        body: {
          id: PET_ID,
          category: { id: PET_ID, name: "string" },
          name: PET_NAME,
          photoUrls: ["string"],
          tags: [
            {
              id: PET_ID,
              name: "string",
            },
          ],
          status: "available",
        },
      }).then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
      });
    });
  
    it("Status on", () => {
      cy.request({
        method: "GET",
        url: "https://petstore.swagger.io/v2/pet/" + PET_ID,
        failOnStatusCode: false,
      }).then(({ status }) => {
        cy.log(status);
        expect(status).to.eq(200);
      });
    });
  
    it("Delete", () => {
      cy.request({
        method: "DELETE",
        url: "https://petstore.swagger.io/v2/pet/" + PET_ID
      }).then(({ status }) => {
        cy.log(status);
        expect(status).to.eq(200);
      });
    });
  
    it("Status off", () => {
      cy.request({
        method: "GET",
        url: "https://petstore.swagger.io/v2/pet/" + PET_ID,
        failOnStatusCode: false,
      }).then(({ status }) => {
        cy.log(status);
        expect(status).to.eq(404);
      });
    });
  
  });
  