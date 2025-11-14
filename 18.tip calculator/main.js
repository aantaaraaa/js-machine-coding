const generateBillButton = document.querySelector(".generate-bill");
const billAmount = document.querySelector(".bill-amount");
const discountPercentage = document.querySelector(".discount-percentage");
const tipsPercentage = document.querySelector(".tip-percentage");
const noOfCustomers = document.querySelector(".no-of-customers");
const totalTipPaid = document.querySelector(".total-tip-paid");
const totalAmountToPay = document.querySelector(".total-amount-to-pay");
const totalTipPercentageValue = document.querySelector(".tip-value");
const discountPercentageValue = document.querySelector(".discount-value");
const totalNoOfCustomersValue = document.querySelector(".no-of-customers-value");
const eachCustomerToPay = document.querySelector(".each-customer-to-pay");

function calculateBill() {
  const billAmountAfterDiscountPercentage =
    billAmount.value - (discountPercentage.value * billAmount.value) / 100;

  const getTipAmount =
    billAmountAfterDiscountPercentage * (tipsPercentage.value / 100);

  const totalBill = billAmountAfterDiscountPercentage + getTipAmount;

  const eachCustomerToPayAmount = totalBill / noOfCustomers.value;

  totalTipPaid.textContent = getTipAmount;
  totalAmountToPay.textContent = totalBill;
  totalTipPercentageValue.textContent = tipsPercentage.value;
  discountPercentageValue.textContent = discountPercentage.value;
  totalNoOfCustomersValue.textContent = noOfCustomers.value;
  eachCustomerToPay.textContent = eachCustomerToPayAmount;
}

discountPercentage.addEventListener("input", () => {
  discountPercentageValue.textContent = discountPercentage.value;
});

tipsPercentage.addEventListener("input", () => {
  totalTipPercentageValue.textContent = tipsPercentage.value;
});

noOfCustomers.addEventListener("input", () => {
  totalNoOfCustomersValue.textContent = noOfCustomers.value;
});

generateBillButton.addEventListener("click", calculateBill);
