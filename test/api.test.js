const request = require("supertest");
const app = require("../index");

describe("API Tests", () => {

  test("GET / should work", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Backend Running Successfully");
  });

  test("POST /students should create student", async () => {
    const response = await request(app)
      .post("/students")
      .send({
        name: "Bhavya",
        age: 21
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.message)
      .toBe("Student added successfully");
  });

  test("POST /students should fail if fields missing", async () => {
    const response = await request(app)
      .post("/students")
      .send({
        name: "Bhavya"
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.error)
      .toBe("Name and age are required");
  });

});