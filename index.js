function handleTicketChange(ticket, isIncrease) {
  const ticketInput = document.getElementById(ticket + "-count");
  const ticketCount = parseInt(ticketInput.value);
  let ticketNewCount = ticketCount;
  if (isIncrease == true) {
    ticketNewCount = ticketCount + 1;
  }
  if (isIncrease == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
  }

  ticketInput.value = ticketNewCount;

  let ticketTotal = 0;
  if (ticket == "first") {
    ticketTotal = ticketNewCount * 150;
  }
  if (ticket == "economy") {
    ticketTotal = ticketNewCount * 100;
  }
  document.getElementById(ticket + "-total").innerText = "$" + ticketTotal;
  calculateTotal();
}

function calculateTotal() {
  const firstInput = document.getElementById("first-count");
  const firstCount = parseInt(firstInput.value);

  const economyInput = document.getElementById("economy-count");
  const economyCount = parseInt(economyInput.value);

  const totalTaka = firstCount * 150 + economyCount * 100;
  document.getElementById("totalPrice").innerText = "$" + totalTaka;
  const vat = totalTaka * 0.1;
  document.getElementById("vat").innerText = "$" + vat;

  const totalAmount = totalTaka + vat;
  document.getElementById("total-amount").innerText = "$" + totalAmount;
}

const bookingBtn = document.getElementById("booking-button");
bookingBtn.addEventListener("click", function () {
  const mainPage = document.getElementById("main-page");
  mainPage.style.display = "none";
  const confirmationMessage = document.getElementById("confirmation-area");
  confirmationMessage.style.display = "block";
});
