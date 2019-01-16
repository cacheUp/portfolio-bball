const express = require("express");
const next = require("next");
const routes = require("../routes");

//Services
const authService = require("./services/auth");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = routes.getRequestHandler(app);

const secretData = [
  { title: "SecretData 1", description: "plans to build spaceship" },
  {
    title: "SecretData 2",
    description: "secret passwords"
  }
];

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/api/v1/secret", authService.checkJWT, (req, res) => {
      res.json(secretData);
    });

    server.use(function(err, req, res, next) {
      if (err.name === "UnauthorizedError") {
        res.status(401).send("invalid token...");
      }
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.use(handle).listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
