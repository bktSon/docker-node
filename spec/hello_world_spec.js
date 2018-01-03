let request = require("request");
let helloWorld = require("../server.js");
let base_url = "http://localhost:3000/";

describe("Hello World Server", function() {
    describe("GET /", function() {
        it("returns status code 200", function(done) {
            request.get(base_url, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        
        it("returns Hello World", function(done) {
            request.get(base_url, function(error, response, body) {
                expect(body).toBe("Hello World");
                helloWorld.closeServer();
                done();
            });
        });
    });
});
