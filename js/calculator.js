//price calculator
var slider = document.querySelector("#myRange");
var calculatorPrice = document.querySelector(".calculatorPrice");
let finalPrice = slider.value * 10;
const firstDiscountValue = 0.1;
const secondDiscountValue = 0.2;
const thirdDiscountValue = 0.3;
let discount = 0;
const discount1 = document.querySelector("#disc1");

const discount2 = document.querySelector("#disc2");

const discount3 = document.querySelector("#disc3");
const suggestions = document.querySelector(".suggestions");
suggestions.innerHTML = slider.value;
calculatorPrice.innerHTML = `${finalPrice}$`;
function priceFunction() {
  if (discount1.checked && discount2.checked && discount3.checked) {
    discount =
      Number(slider.value) +
      Number(slider.value) * 2 +
      Number(slider.value) * 3;
  } else if (discount1.checked && discount2.checked) {
    discount = Number(slider.value) + Number(slider.value) * 2;
  } else if (discount1.checked && discount3.checked) {
    discount = Number(slider.value) + Number(slider.value) * 3;
  } else if (discount2.checked && discount3.checked) {
    discount = Number(slider.value) * 2 + Number(slider.value) * 3;
  } else if (discount1.checked) {
    discount = slider.value;
  } else if (discount2.checked) {
    discount = slider.value * 2;
  } else if (discount3.checked) {
    discount = slider.value * 3;
  } else {
    discount = 0;
  }
  let finalPrice = Number(slider.value * 10) - discount;
  calculatorPrice.innerHTML = `${finalPrice}$`;
  suggestions.innerHTML = `${slider.value}`;
}
discount1.addEventListener("change", e => {
  priceFunction();
});
discount2.addEventListener("change", e => {
  priceFunction();
});
discount3.addEventListener("change", e => {
  priceFunction();
});
