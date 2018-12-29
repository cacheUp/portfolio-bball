import auth0 from "auth0-js";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

const isClient = typeof window !== "undefined";

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "dev-0kws86jw.auth0.com",
      clientID: "H5Z2uRcCJFpz2A8JDXEqWh4M91NH5Axl",
      redirectUri: "http://localhost:3000/callback",
      responseType: "token id_token",
      scope: "openid profile"
    });
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);

    this.logout = this.logout.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          console.log(err);
        }
      });
    });
  }

  login() {
    this.auth0.authorize();
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    const expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    // this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
    Cookies.set("user", authResult.idTokenPayload);
    Cookies.set("jwt", authResult.idToken);
    Cookies.set("expiresAt", expiresAt);

    // navigate to the home route
  }

  logout() {
    Cookies.remove("user");
    Cookies.remove("jwt");
    Cookies.remove("expiresAt");
    const auth = this.auth0;
    isClient &&
      auth.logout({
        returnTo: "",
        clientId: "H5Z2uRcCJFpz2A8JDXEqWh4M91NH5Axl"
      });
  }

  verifyToken(token) {
    if (token) {
      const decodedToken = jwt.decode(token);
      const expiresAt = decodedToken.exp * 1000;
      return decodedToken && new Date().getTime() < expiresAt
        ? decodedToken
        : undefined;
    }
    return undefined;
  }

  clientAuth() {
    console.log("hey");
    const token = Cookies.getJSON("jwt");
    const verifiedToken = this.verifyToken(token);

    return verifiedToken;
  }

  serverAuth(req) {
    console.log("hey");
    if (req.headers.cookies) {
      const tokenCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim.startsWith("jwt="));

      if (!tokenCookie) {
        return undefined;
      }
      const token = tokenCookie.split("=")[1];
      const verifiedToken = this.verifyToken(token);
      return verifiedToken;
    }
    return undefined;
  }
}

const auth0Client = new Auth();
export default auth0Client;
