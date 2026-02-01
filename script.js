const themeButtons = document.querySelectorAll(".theme-buttons button");
const themes = ["dark", "darkblue", "bordeaux"];

themeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedTheme = button.getAttribute("data-theme");

    // Remove all theme classes
    themes.forEach(theme => document.body.classList.remove(theme));

    // Add selected theme
    document.body.classList.add(selectedTheme);

    // Optional: highlight active button
    themeButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
