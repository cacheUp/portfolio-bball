import auth0 from "auth0-js";

export default class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "dev-0kws86jw.auth0.com",
      clientID: "t00po26CMCUGgjCE9W0SH2INKnvPIU0V",
      redirectUri: "http://localhost:3000/callback",
      responseType: "token id_token",
      scope: "openid"
    });
  }

  login() {
    this.auth0.authorize();
  }
}
