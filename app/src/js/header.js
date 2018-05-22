const mobileDropdowns = document.querySelectorAll(
  ".mobile-container .dropdown > a"
);

for (let i = 0; i < mobileDropdowns.length; i++) {
  mobileDropdowns[i].addEventListener("click", toggleMobileDropdown);
}

function toggleMobileDropdown(e) {
  e.preventDefault();

  const dropdownContainer = e.target.parentNode;

  if (dropdownContainer.className.includes("expanded")) {
    dropdownContainer.classList.remove("expanded");
  } else {
    dropdownContainer.classList.add("expanded");
  }
}
