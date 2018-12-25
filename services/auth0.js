import auth0 from "auth0-js";
import { rejects } from "assert";

class Auth0 {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "dev-0kws86jw.auth0.com",
      clientID: "t00po26CMCUGgjCE9W0SH2INKnvPIU0V",
      redirectUri: "http://localhost:3000/callback",
      responseType: "token id_token",
      scope: "openid profile"
    });
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    return new Promise((res, rej) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          res();
        } else if (err) {
          console.log(err);
          rejects(err);
        }
      });
    });
  }
  setSession() {}
}

const auth0Client = new Auth0();

export default auth0Client;
