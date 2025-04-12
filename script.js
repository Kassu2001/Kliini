let userEmail = "";

function handleCredentialResponse(response) {
  const jwt = JSON.parse(atob(response.credential.split('.')[1]));
  userEmail = jwt.email;
  localStorage.setItem("userEmail", userEmail);
  window.location.href = "home.html";
}

function getUserEmail() {
  return localStorage.getItem("userEmail");
}
