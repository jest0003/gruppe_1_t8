const thumbnails = document.querySelectorAll(".thumb");
const bigImg = document.querySelector("#big-img");

thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
bigImg.src = thumb.src.replace();

thumbnails.forEach(t => t.classList.remove(".activated"));
thumb.classList.add(".activated");
    })
})

//plus minus knap----------------

const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const amount = document.querySelector("#amount");

let count = 1;

plus.addEventListener("click", (e) => {
    e.preventDefault();
    count++;
    amount.textContent = count;
})

minus.addEventListener("click", (e) => {
    e.preventDefault();
    if (count > 1) {
        count--;
    amount.textContent = count;}
})