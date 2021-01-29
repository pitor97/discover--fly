document
  .getElementById("plusButton-firstClass")
  .addEventListener("click", function () {
    handleTicketChange(true);
  });
document
  .getElementById("minusButton-firstClass")
  .addEventListener("click", function () {
    handleTicketChange(false);
  });
function handleTicketChange(isIncrease) {
  const firstClassInput = document.getElementById("firstClassQuantity");
  const firstClassCount = parseInt(firstClassInput.value);
  let firstClassNewCount = firstClassCount;
  if (isIncrease == true) {
    firstClassNewCount = firstClassCount + 1;
  }
  if (isIncrease == false && firstClassCount > 0) {
    firstClassNewCount = firstClassCount - 1;
  }
  firstClassInput.value = firstClassNewCount;
  const firstClassTotal = firstClassNewCount * 150;
  document.getElementById("totalPrice").innerText = "$" + firstClassTotal;
}
