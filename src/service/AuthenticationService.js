class AuthenticationService {
  successfulLogin(username, password) {
    console.log("successfulLogin");
    sessionStorage.setItem("AuthenticatedUser", username);
  }

  logout() {
    sessionStorage.removeItem("AuthenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("AuthenticatedUser");
    if (user === null) return false;
    return true;
  }
}

export default new AuthenticationService();
