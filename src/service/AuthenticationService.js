class AuthenticationService {
  successfulLogin(username, password) {
    console.log("successfulLogin");
    sessionStorage.setItem("AuthenticatedUser", username);
  }
}

export default new AuthenticationService();
