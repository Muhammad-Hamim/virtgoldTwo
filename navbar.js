function selectCurrency(currency) {
  const currencyElement = document.getElementById("currency");
  currencyElement.innerHTML = currency;
  hideCurrencyMenu();
}

function hideCurrencyMenu() {
  const currencyMenu = document.getElementById("currencyMenu");
  currencyMenu.classList.toggle("hidden");
}

// Selecting the currency for mobile
function selectCurrencyMobile(currency) {
  const currencyElement = document.getElementById("currencyMobile");
  currencyElement.innerHTML = currency;
  hideCurrencyMenuMobile();
}
function hideCurrencyMenuMobile() {
  const currencyMenu = document.getElementById("currencyMenuMobile");
  currencyMenu.classList.toggle("hidden");
}

const openMenuButton = document.getElementById("openMenu");
const menuList = document.getElementById("menuList");
openMenuButton.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// navabar script
