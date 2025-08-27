const heartCount = document.getElementById("heart-count");
const coinCount = document.getElementById("coin-count");
const copyCount = document.getElementById("copy-count");
const allHearts = document.querySelectorAll(".fa-heart");
const allCallButtons = document.querySelectorAll(".btn-call");
const historyCard = document.getElementById("history-card");
const clearHistory = document.getElementById("clear-history");
let totalHeart = 0;

allHearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    totalHeart = totalHeart + 1;
    heartCount.innerText = totalHeart;
  });
});

allCallButtons.forEach((callBtn) => {
  callBtn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const cardHeading = card.querySelector(".card-heading").innerText;
    const cardNumber = card.querySelector(".card-number").innerText;
    let coinValue = parseInt(coinCount.innerText);
    if (coinValue > 0) {
      alert(`📞 Calling... ${cardHeading} ${cardNumber}`);
      coinValue -= 20;
      coinCount.innerText = coinValue;
      const now = new Date();
      const timeStr = now.toLocaleTimeString();
      historyCard.insertAdjacentHTML(
        "beforeend",
        `
          <div
            class="flex justify-between items-center px-4 py-2 my-2 bg-gray-100 rounded-xl"
          >
            <div class = "basis-2/3">
              <h4 class="font-bold py-1">${cardHeading}</h4>
              <p class="text-sm text-gray-600">${cardNumber}</p>
            </div>
            <div>
              <p class="text-sm text-gray-600">${timeStr}</p>
            </div>
          </div> 
          `
      );
    } else {
      alert(
        "❌ You Dont Have Sufficient Balance To Call. You Need Minimum 20 Coins To Call"
      );
    }
  });
});

clearHistory.addEventListener("click", () => {
  historyCard.innerHTML = "";
});
