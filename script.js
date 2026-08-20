document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("helloBtn");
  const status = document.getElementById("status");
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  button.addEventListener("click", () => {
    status.textContent = "Button clicked successfully! JavaScript is working.";
    button.textContent = "Done!";
  });
});
