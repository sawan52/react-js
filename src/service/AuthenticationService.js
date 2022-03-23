class AuthenticationService {
  successfulLogin(username, password) {
    console.log("successfulLogin");
    sessionStorage.setItem("AuthenticatedUser", username);
  }

  logout() {
    sessionStorage.removeItem("AuthenticatedUser");
  }
}

export default new AuthenticationService();
