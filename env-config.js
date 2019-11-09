const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://www.bradleyball.dev"
    : "http://localhost:3000",
  "process.env.NAMESPACE": prod
    ? "https://www.bradleyball.dev"
    : "http://localhost:3000",
  "process.env.CLIENT": "H5Z2uRcCJFpz2A8JDXEqWh4M91NH5Axl",
  "process.env.PORT": "https://www.bradleyball.dev"
};
