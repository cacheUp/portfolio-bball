const prod = process.env.NODE_ENV === "production";

module.exports = {
  "proccess.env.BASE_URL": prod
    ? "https://portfolio-bball.herokuapp.com"
    : "http://localhost:3000",
  "process.env.NAMESPACE": prod
    ? "https://portfolio-bball.herokuapp.com"
    : "http://localhost:3000"
};
