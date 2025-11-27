// Mobile menu toggle
const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Close menu when clicking a link (mobile)
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form: open email app with mailto:
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = "#fca5a5";
    return false;
  }

  // 👉 CHANGE THIS TO YOUR REAL EMAIL
  const toEmail = "yourmail@example.com";

  const subject = encodeURIComponent("Portfolio Contact from " + name);
  const body = encodeURIComponent(
    "Name: " + name +
    "\nEmail: " + email +
    "\n\nMessage:\n" + message
  );

  // Opens the user's email app with pre-filled mail
  window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;

  status.textContent = "Opening your email app…";
  status.style.color = "#6ee7b7";

  // Clear inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  return false;
}

// Scroll reveal for sections
const revealElements = document.querySelectorAll(".reveal");

function handleScrollReveal() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScrollReveal);
window.addEventListener("load", handleScrollReveal);