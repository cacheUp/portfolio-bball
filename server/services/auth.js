const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

exports.checkJWT = jwt({
  secret: jwksRsa({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10, // Default value
    jwksUri: "https://dev-0kws86jw.auth0.com/.well-known/jwks.json" // Optional
  }),
  audience: "H5Z2uRcCJFpz2A8JDXEqWh4M91NH5Axl",
  issuer: "https://dev-0kws86jw.auth0.com",
  algorithms: ["RS256"]
});
