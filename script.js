function toggleNavigation() {
  let nav = document.getElementById("mobile-nav");
  if (nav.classList.contains('w3-show')) {
    nav.classList.remove('w3-show');
  } else { 
    nav.classList.add('w3-show');
  }
}

// Script to load feather icons
feather.replace();

/// Function to simulate typing effect
function typeText(element, text, speed, callback) {
  let i = 0;
  const typeInterval = setInterval(function () {
    element.innerHTML += text.charAt(i);
    i++;
    if (i > text.length) {
      clearInterval(typeInterval);
      if (callback) {
        setTimeout(callback, 1000); // Wait for 1 second before resetting
      }
    }
  }, speed);
}

// Function to start the typing effect for your name
function startTyping() {
  const nameElement = document.getElementById("your-name"); // Update with the actual ID of your name element
  const nameText = "Abby Gail";
  const typingSpeed = 100; // Adjust the speed as needed

  function resetText() {
    nameElement.innerHTML = nameText.charAt(0); // Leave the first letter
    setTimeout(function () {
      startTyping();
    }, 1000); // Wait for 1 second before starting again
  }

  typeText(nameElement, nameText.substring(1), typingSpeed, resetText);
}

// Call the startTyping function when the page is loaded
document.addEventListener("DOMContentLoaded", startTyping);

// Function to toggle between light and dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Save the user's preference in local storage
  const isDarkModeEnabled = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkModeEnabled);
}

// Function to check and apply user's dark mode preference
function applyDarkModePreference() {
  const body = document.body;
  const isDarkModeEnabled = localStorage.getItem("darkMode") === "true";

  if (isDarkModeEnabled) {
    body.classList.add("dark-mode");
  }
}

// Call the applyDarkModePreference function when the page is loaded
document.addEventListener("DOMContentLoaded", applyDarkModePreference);