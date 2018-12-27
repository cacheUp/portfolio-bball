import auth0 from "auth0-js";
import Cookies from "js-cookie";

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
    this.isAuthenticated = this.logout.bind(this);
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
    this.auth0.logout({
      returnTo: "",
      clientId: "H5Z2uRcCJFpz2A8JDXEqWh4M91NH5Axl"
    });
  }
  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = Cookies.getJSON("expiresAt");
    return new Date().getTime() < expiresAt;
  }
}

const auth0Client = new Auth();
export default auth0Client;
