let totalHeart = 0;
let copyCountValue = 0;

document.querySelectorAll(".fa-heart").forEach((heart) => {
  heart.addEventListener("click", () => {
    totalHeart = totalHeart + 1;
    document.getElementById("heart-count").innerText = totalHeart;
  });
});

document.querySelectorAll(".btn-call").forEach((callBtn) => {
  callBtn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const cardHeading = card.querySelector(".card-heading").innerText;
    const cardNumber = card.querySelector(".card-number").innerText;
    let coinValue = parseInt(document.getElementById("coin-count").innerText);
    if (coinValue >= 20) {
      alert(`📞 Calling... ${cardHeading} ${cardNumber}`);
      coinValue -= 20;
      document.getElementById("coin-count").innerText = coinValue;
      const now = new Date();
      const timeStr = now.toLocaleTimeString();
      document.getElementById("history-card").insertAdjacentHTML(
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

document.getElementById("clear-history").addEventListener("click", () => {
  historyCard.innerHTML = "";
});

document.querySelectorAll(".btn-copy").forEach((copyBtn) => {
  copyBtn.addEventListener("click", (e) => {
    const copyCard = e.target.closest(".card");
    const hotlineNumber = copyCard.querySelector(".card-number").innerText;
    navigator.clipboard
      .writeText(hotlineNumber)
      .then(() => {
        alert(`This Number has been Copied: ${hotlineNumber}`);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
    copyCountValue += 1;
    document.getElementById("copy-count").innerText = copyCountValue;
  });
});
