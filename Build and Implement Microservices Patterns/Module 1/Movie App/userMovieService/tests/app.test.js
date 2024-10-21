var rest_supertest = require("supertest");
var should = require("should");

// Enter your REST microservice app's URL here

var rest_server = rest_supertest.agent("http://localhost:4002");

describe("Unit Tests for REST Service", function () {
    // # 1 Test if the REST URL is up
    it("should find the get movies to be running", function (done) {
        rest_server
            .get("/movies")
            .expect("Content-Type", /json/)
            .expect(200)
        done();
    });

    it("should find the get users service to be running", function (done) {
        rest_server
            .get("/users")
            .expect("Content-Type", /json/)
            .expect(201)
        done();
    });

    it("should find the save user service to be running", function (done) {
        rest_server.post("/user").expect("Content-Type", /json/).expect(201)
        done();
    })

    it("should find the save movies service to be running", function (done) {
        rest_server.post("/movies").expect("Content-Type", /json/).expect(201)
        done();
    })

    it("should return 404", function (done) {
        rest_server
            .get("/notfound")
            .expect("Content-Type", /json/)
            .expect(404)
        done();
    });

})