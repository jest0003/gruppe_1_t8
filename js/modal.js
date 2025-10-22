// 🌿 Wait until the page has fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-box");
  const closeBtn = document.querySelector(".close-btn");

  // 🕒 Show the modal after 30 seconds
  setTimeout(() => {
    modal.style.display = "flex"; // make it appear (CSS flex centers it)
  }, 5000); // 30000 milliseconds = 30 seconds

  // ❌ Close modal when the "x" button is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // 🖱️ Also close modal if user clicks *outside* the box
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
