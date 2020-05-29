const supertest = require("supertest");
const server = require("../api/server.js");
const db = require("../testing db/connectionTesting.js");

afterEach(async () => {
  await db("users").truncate();
});

describe("POST /users/register", () => {
  it("should return status code of 201", () => {
    return supertest(server)
      .post("/auth/register")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});
