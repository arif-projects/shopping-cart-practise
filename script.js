//updating product number & cost
function updateproductNumber(isIncreasing, product, price) {
  let productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;

  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
  calculateTotal();
}

//total cost calcuatiion
function calculateTotal() {
  const phoneTotal = document.getElementById("phone-number").value;
  const phoneTotalPrice = parseInt(phoneTotal) * 1219;
  const caseTotal = document.getElementById("case-number").value;
  const caseTotalPrice = parseInt(caseTotal) * 59;

  const subtotal = document.getElementById("sub-total");
  const subtotalAmount = phoneTotalPrice + caseTotalPrice;
  subtotal.innerText = subtotalAmount;

  const tax = document.getElementById("tax");
  const taxAmount = (phoneTotalPrice + caseTotalPrice) / 10;
  tax.innerText = taxAmount;

  const total = document.getElementById("total");
  const totalAmount = subtotalAmount + taxAmount;
  total.innerText = totalAmount;
}

document.getElementById("case-plus").addEventListener("click", function () {
  updateproductNumber(true, "case", 59);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateproductNumber(false, "case", 59);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateproductNumber(false, "phone", 1219);
});
document.getElementById("phone-plus").addEventListener("click", function () {
  updateproductNumber(true, "phone", 1219);
});
