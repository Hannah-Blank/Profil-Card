// Hamburger menu
const toggleButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Theme switching
const themeButtons = document.querySelectorAll(".menu button");
const themes = ["white", "dark", "darkblue", "bordeaux"];

themeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedTheme = button.dataset.theme;

    themes.forEach(theme =>
      document.body.classList.remove(theme)
    );

    document.body.classList.add(selectedTheme);

    // close menu after selection
    menu.classList.remove("open");
  });
});
