const heartCount = document.getElementById("heart-count");
const coinCount = document.getElementById("coin-count");
const copyCount = document.getElementById("copy-count");
const allHearts = document.querySelectorAll(".fa-heart");
const allCallButtons = document.querySelectorAll(".btn-call");
let totalHeart = 0;

allHearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    totalHeart = totalHeart + 1;
    heartCount.innerText = totalHeart;
  });
});

allCallButtons.forEach((callBtn) => {
  callBtn.addEventListener("click", () => {
    alert();
  });
});
