const scrollAnimation = document.querySelectorAll('.scroll-animation');

  window.addEventListener('scroll', () => {
    scrollAnimation.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      //this is for the bottom animation//const boxBottom = box.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      // Add animation when box enters view
      if (boxTop < windowHeight // bottom animation/*&& boxBottom > 0*/
        ) {
        box.classList.add('show');
      } else {
        box.classList.remove('show'); // Allow animation again when scrolling back
      }
      });
  }); 

const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav")

hamburger.addEventListener("click", () => {
    navList.classList.toggle("show");
    hamburger.classList.toggle("open");
});

// ...existing code...
// Burger menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger-menu");
  const navLinks = document.getElementById("nav-links");
  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      burger.classList.toggle("open");
      navLinks.classList.toggle("open");
    });
  }
});

// ...existing code...

// Swap .hero-image and .hero-content order on small screens
document.addEventListener("DOMContentLoaded", function () {
  function swapHeroOrder() {
    const heroSection = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    if (!heroSection || !heroContent || !heroImage) return;

    if (window.innerWidth <= 1000) {
      // Move hero-image before hero-content
      if (heroSection.firstElementChild !== heroImage) {
        heroSection.insertBefore(heroImage, heroContent);
      }
    } else {
      // Restore hero-content before hero-image
      if (heroSection.firstElementChild !== heroContent) {
        heroSection.insertBefore(heroContent, heroImage);
      }
    }
  }

  swapHeroOrder();
  window.addEventListener('resize', swapHeroOrder);
});

// ...Book popUP...




/*
document.getElementById('removeBtn').addEventListener('click', function(){
  const elements = document.querySelectorAll('body .hero .modal-container')
  const except0ne = elements[9];

  elements.forEach(element => {
    if (element !== except0ne) {
      element.remove();
    }
  })
})
  */
// Select all buttons that should open the popup
const openBtns = document.querySelectorAll(".openPopup");
const closeBtn = document.getElementById("closePopup");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

// Form elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

// Error messages
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");

// Success message
const successMsg = document.getElementById("successMsg");

// Open popup on any button
openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    overlay.style.display = "flex";
    setTimeout(() => modal.classList.add("show"), 10);
  });
});

// Close popup
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => overlay.style.display = "none", 300);
});

// Close when clicking outside modal
window.addEventListener("click", (e) => {
  if (e.target === overlay) {
    modal.classList.remove("show");
    setTimeout(() => overlay.style.display = "none", 300);
  }
});

// Form validation & success
document.getElementById("hoverbtn").addEventListener("click", function(e) {
  e.preventDefault();
  let valid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const message = messageInput.value.trim();

  if (!name) { nameError.textContent = "Name is required."; valid = false; }
  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!email) { emailError.textContent = "Email is required."; valid = false; }
  else if (!emailPattern.test(email)) { emailError.textContent = "Only valid Gmail allowed."; valid = false; }
  if (!phone) { phoneError.textContent = "Phone is required."; valid = false; }
  if (!message) { messageError.textContent = "Message is required."; valid = false; }

  if (valid) {
    successMsg.textContent = "🎉 Congratulations, your message was sent!";
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";

    // Auto-close after 2 seconds
    setTimeout(() => {
      modal.classList.remove("show");
      setTimeout(() => overlay.style.display = "none", 300);
    }, 2000);
  }
});
















// ================= Monthly/Yearly Toggle =================
const monthlyBtn = document.querySelector(".price-btn");
const yearlyBtn = document.querySelector(".price-btnwhite");
const monthlyCon = document.querySelector(".pricing-monthly");
const yearlyCon = document.querySelector(".pricing-yearly");

monthlyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  monthlyBtn.classList.add("active");
  yearlyBtn.classList.remove("active");

  monthlyCon.classList.add("active");
  yearlyCon.classList.remove("active");
});

yearlyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  yearlyBtn.classList.add("active");
  monthlyBtn.classList.remove("active");

  yearlyCon.classList.add("active");
  monthlyCon.classList.remove("active");
});















