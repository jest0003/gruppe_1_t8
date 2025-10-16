const thumbnails = document.querySelectorAll(".thumb");
const bigImg = document.querySelector("#big-img");

thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
bigImg.src = thumb.src.replace();

thumbnails.forEach(t => t.classList.remove(".activated"));
thumb.classList.add(".activated");
    })
})