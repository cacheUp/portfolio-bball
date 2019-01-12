exports.checkJWT = function(req, res, next) {
  const isValidToken = true;
  isValidToken
    ? next()
    : res.status(401).send({
        title: "Not Authorized, detail: Please login in order to get data"
      });
};
