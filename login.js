var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "") {
    alert("Username Harus Diisi!");
    form.username.focus();
    return false;
  } else if (password == "") {
    alert("password Harus Diisi!");
    form.username.focus();
    return false;
  } else if (!username == "1" && password == "1") {
    alert("Password salah!");
    form.username.focus();
    return false;
  } else if (username == "1" && password == "1") {
    alert("Login successfully");
    window.location = "success.html"; // Redirecting to other page.
    return false;
  } else {
    alert("Username dan password Salah ");
    return false;
  }
}
