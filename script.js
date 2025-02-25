document.addEventListener("DOMContentLoaded", function() {
  const authContainer = document.getElementById("authContainer");
  const authTitle = document.getElementById("authTitle");
  const authForm = document.getElementById("authForm");
  const toggleAuth = document.getElementById("toggleAuth");
  const mainNav = document.getElementById("mainNav");
  const mainContent = document.getElementById("mainContent");
  const logoutBtn = document.getElementById("logoutBtn");

  let isSignUp = false;

  // Toggle antara login & sign-up
  toggleAuth.addEventListener("click", function() {
      isSignUp = !isSignUp;
      if (isSignUp) {
          authTitle.textContent = "Sign Up";
          toggleAuth.innerHTML = '<a href="#">Sudah punya akun? Login</a>';
      } else {
          authTitle.textContent = "Login";
          toggleAuth.innerHTML = '<a href="#">Belum punya akun? Daftar</a>';
      }
  });

  // Simulasi login/sign-up
  authForm.addEventListener("submit", function(e) {
      e.preventDefault();
      authContainer.style.display = "none";
      mainNav.classList.remove("d-none");
      mainContent.classList.remove("d-none");
  });

  // Logout
  logoutBtn.addEventListener("click", function() {
      authContainer.style.display = "flex";
      mainNav.classList.add("d-none");
      mainContent.classList.add("d-none");
  });

  // Smooth scroll untuk menu navigasi
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: "smooth" });
          }
      });
  });
});
