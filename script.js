function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("login", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Username atau password salah!");
  }
}

function logout() {
  localStorage.removeItem("login");
  window.location.href = "index.html";
}

// Proteksi halaman
if (window.location.pathname.includes("dashboard")) {
  if (!localStorage.getItem("login")) {
    window.location.href = "index.html";
  }
}
