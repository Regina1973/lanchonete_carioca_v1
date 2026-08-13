const request = require("supertest");
const app = require("../src/app");

describe("Produtos", () => {

  test("GET /products deve retornar 200", async () => {

    const response =
      await request(app)
        .get("/products");

    expect(response.status).toBe(200);

  });

});