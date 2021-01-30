function handleProductChange(product, isIncrease) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  let productNewCount = productCount;
  if (isIncrease == true) {
    productNewCount = productCount + 1;
  }
  if (isIncrease == false && productCount > 0) {
    productNewCount = productCount - 1;
  }

  productInput.value = productNewCount;
  // const productTotal = productNewCount * 100;
  let productTotal = 0;
  if (product == "phone") {
    productTotal = productNewCount * 150;
  }
  if (product == "case") {
    productTotal = productNewCount * 100;
  }
  document.getElementById(product + "-total").innerText = "$" + productTotal;
  calculateTotal();
}

function calculateTotal() {
  const phoneInput = document.getElementById("phone-count");
  const phoneCount = parseInt(phoneInput.value);

  const caseInput = document.getElementById("case-count");
  const caseCount = parseInt(caseInput.value);

  const totalTaka = phoneCount * 150 + caseCount * 100;
  document.getElementById("totalPrice").innerText = "$" + totalTaka;
  const vat = totalTaka * 0.1;
  document.getElementById("vat").innerText = "$" + vat;

  const totalAmount = totalTaka + vat;
  document.getElementById("total-amount").innerText = "$" + totalAmount;
}

//function handleProductChange(isIncrease) {
//  const caseInput = document.getElementById("case-count");
//  const caseCount = parseInt(caseInput.value);
//  let caseNewCount = caseCount;
//  if (isIncrease == true) {
//    caseNewCount = caseCount + 1;
//  }
//  if (isIncrease == false && caseCount > 0) {
//    caseNewCount = caseCount - 1;
//  }
//
//  caseInput.value = caseNewCount;
//  const caseTotal = caseNewCount * 100;
//  document.getElementById("case-total").innerText = "$" + caseTotal;
//}
//
//function handlePhoneChange(isIncrease) {
//  const phoneInput = document.getElementById("phone-count");
//  const phoneCount = parseInt(phoneInput.value);
//  let phoneNewCount = phoneCount;
//  if (isIncrease == true) {
//    phoneNewCount = phoneCount + 1;
//  }
//  if (isIncrease == false && phoneCount > 0) {
//    phoneNewCount = phoneCount - 1;
//  }
//  phoneInput.value = phoneNewCount;
//  const phoneTotal = phoneNewCount * 150;
//  document.getElementById("phone-total").innerText = "$" + phoneTotal;
//}

//document
//  .getElementById("phone-increase")
//  .addEventListener("click", function () {
//    const phoneInput = document.getElementById("phone-count");
//    const phoneCount = parseInt(phoneInput.value);
//    phoneNewCount = phoneCount + 1;
//    phoneInput.value = phoneNewCount;
//    const phoneTotal = phoneNewCount * 150;
//    document.getElementById("phone-total").innerText = "$" + phoneTotal;
//  });
//document
//  .getElementById("phone-decrease")
//  .addEventListener("click", function () {
//    const phoneInput = document.getElementById("phone-count");
//    const phoneCount = parseInt(phoneInput.value);
//    phoneNewCount = phoneCount - 1;
//    phoneInput.value = phoneNewCount;
//    const phoneTotal = phoneNewCount * 150;
//    document.getElementById("phone-total").innerText = "$" + phoneTotal;
//  });
//
////document.getElementById("case-increase").addEventListener("click", function () {
//  const caseInput = document.getElementById("case-count");
//  const caseCount = parseInt(caseInput.value);
//  const caseNewCount = caseCount + 1;
//  caseInput.value = caseNewCount;
//  const caseTotal = caseNewCount * 100;
//  document.getElementById("case-total").innerText = '$'+ caseTotal
//});

//
//function handlePhoneChange(isIncrease) {
//  const phoneInput = document.getElementById("phone-count");
//  const phoneCount = parseInt(phoneInput.value);
//  let phoneNewCount = phoneCount;
//  if (isIncrease == true) {
//    phoneNewCount = phoneCount + 1;
//  }
//  if (isIncrease == false && phoneCount > 0) {
//    phoneNewCount = phoneCount - 1;
//  }
//
//  phoneInput.value = phoneNewCount;
//  const phoneTotal = phoneNewCount * 150;
//  document.getElementById("phone-total").innerText = "$" + caseTotal;
//}

//document.getElementById("case-increase").addEventListener("click", function () {
//  const caseInput = document.getElementById("case-count");
//  const caseCount = parseInt(caseInput.value);
//  const caseNewCount = caseCount + 1;
//  caseInput.value = caseNewCount;
//  const caseTotal = caseNewCount * 100;
//  document.getElementById("case-total").innerText = '$'+ caseTotal
//});
//
//document.getElementById("case-decrease").addEventListener("click", function () {
//  const caseInput = document.getElementById("case-count");
//  const caseCount = parseInt(caseInput.value);
//  const caseNewCount = caseCount - 1;
//  caseInput.value = caseNewCount;
//  const caseTotal = caseNewCount * 100;
//  document.getElementById("case-total").innerText = '$'+ caseTotal
//});

//function handleProductChange(isIncrease) {
//  const economyTicketInput = document.getElementById("economyClassQuantity");
//  const economyCount = parseInt(economyTicketInput.value);
//  //const economyNewCount = economyCount - 1;
//  let economyNewCount = economyCount;
//  if (isIncrease == true) {
//    economyNewCount = economyCount + 1;
//  }
//  if (isIncrease == false && economyCount > 0) {
//    economyNewCount = economyCount - 1;
//  }
//  economyTicketInput.value = economyNewCount;
//  const economyTotal = economyNewCount * 100;
//  document.getElementById("totalPriceEconomy").innerText = economyTotal + "$";
//  calculateTotal();
//}
//
//function handleTicketChange(isIncrease) {
//  const firstClassInput = document.getElementById("firstClassQuantity");
//  const firstClassCount = parseInt(firstClassInput.value);
//  let firstClassNewCount = firstClassCount;
//  if (isIncrease == true) {
//    firstClassNewCount = firstClassCount + 1;
//  }
//  if (isIncrease == false && firstClassCount > 0) {
//    firstClassNewCount = firstClassCount - 1;
//  }
//  firstClassInput.value = firstClassNewCount;
//  const firstClassTotal = firstClassNewCount * 150;
//  document.getElementById("totalPriceFirstClass").innerText =
//    "$" + firstClassTotal;
//  const firstGrandTotal =
//    document.getElementById(totalPrice).innerText + firstClassTotal + "$";
//  calculateTotal();
//}
//document
//  .getElementById("plusButton-economyClass")
//  .addEventListener("click", function () {
//    const economyTicketInput = document.getElementById("economyClassQuantity");
//    const economyCount = parseInt(economyTicketInput.value);
//    const economyNewCount = economyCount + 1;
//    economyTicketInput.value = economyNewCount;
//    const economyTotal = economyNewCount * 100;
//    document.getElementById("totalPriceEconomy").innerText = economyTotal + "$";
//  });
//document
//  .getElementById("minusButton-economyClass")
//  .addEventListener("click", function () {
//    const economyTicketInput = document.getElementById("economyClassQuantity");
//    const economyCount = parseInt(economyTicketInput.value);
//    const economyNewCount = economyCount - 1;
//    economyTicketInput.value = economyNewCount;
//    const economyTotal = economyNewCount * 100;
//    document.getElementById("totalPriceEconomy").innerText = economyTotal + "$";
//  });
// code for first class

//function calculateTotal() {
//  const firstClassInput = document.getElementById(firstClassQuantity);
//  const firstClassCount = parseInt(firstClassInput.value);
//
//  const economyTicketInput = document.getElementById("economyClassQuantity");
//  const economyCount = parseInt(economyTicketInput);
//  totalPrice = firstClassCount * 150 + economyCount * 100;
//  document.getElementById("totalPrice").innerText = "$" + totalPrice;
//}
