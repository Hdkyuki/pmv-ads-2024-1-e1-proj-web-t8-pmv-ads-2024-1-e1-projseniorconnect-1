function logOut() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    window.location.href = "testelogin.html";
};