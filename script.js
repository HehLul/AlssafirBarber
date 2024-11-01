document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > window.innerHeight * 0.1) {
    // Adjust threshold as needed
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Add smooth scrolling to all navbar links
document.querySelectorAll('.navbar a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Optional: Update active nav link based on scroll position
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150; // Adjust offset as needed
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = "#" + section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentSection) {
      link.classList.add("active");
    }
  });
});

function openDialog() {
  const dialog = document.getElementById("bookingDialog");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
  dialog.classList.add("active");
}

function closeDialog() {
  const dialog = document.getElementById("bookingDialog");
  document.body.style.overflow = ""; // Restore scrolling
  dialog.classList.remove("active");
}

// Close dialog when clicking outside
document
  .getElementById("bookingDialog")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      closeDialog();
    }
  });

// Prevent closing when clicking inside dialog content
document
  .querySelector(".dialog-content")
  .addEventListener("click", function (e) {
    e.stopPropagation();
  });

// Close on escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeDialog();
  }
});
