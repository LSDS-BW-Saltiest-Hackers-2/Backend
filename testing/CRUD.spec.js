const supertest = require("supertest");
const server = require("../api/server.js");
const db = require("../db/connection.js");

afterEach(async () => {
  await db("comment").truncate();
});

describe("GET /users/", () => {
  it("should provide status 200", async () => {
    return supertest(server)
      .get("/users/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.status).toBe(200);
      });
  });
});

describe("PUT /users/1", () => {
  it("should check to see it accepts a json and that it has a 200 status", async () => {
    return supertest(server)
      .put("/users/1")

      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .send({ comment: "stuff" })
      .then((response) => {
        expect(response.status).toBe(200);
      });
  });
});

describe("POST /users", () => {
  it("should check to see if it has a 200 status", async () => {
    return supertest(server)
      .post("/users/")
      .send({ comment: "stuff" })
      .then((response) => {
        expect(response.status).toBe(201);
      });
  });
});

describe("DELETE /users/1", () => {
  it("should check to see if it has a 200 status and that success message is showing", async () => {
    return supertest(server)
      .delete("/users/1")
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("message");
      });
  });
});
