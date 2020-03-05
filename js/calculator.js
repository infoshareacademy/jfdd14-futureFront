//price calculator
var slider = document.querySelector("#myRange");
var calculatorPrice = document.querySelector(".calculatorPrice");
let finalPrice = slider.value * 10;
const firstDiscountValue = 0.1;
const secondDiscountValue = 0.2;
const thirdDiscountValue = 0.3;

calculatorPrice.innerHTML = `${finalPrice}$`;

function priceFunction(disc = 0) {
  let finalPrice = Number(slider.value * 10) - Number(slider.value * 10) * disc;
  calculatorPrice.innerHTML = `${finalPrice}$`;
}

const discount1 = document.querySelector("#disc1");
/* discount1.addEventListener('change',e => {
  if(e.target.checked) {
    priceFunction(firstDiscountValue);
  }
}); */
const discount2 = document.querySelector("#disc2");
/* discount2.addEventListener('change',e => {
  if(e.target.checked) {
    

  }
}); */
const discount3 = document.querySelector("#disc3");
/* discount3.addEventListener('change',e => {
  if(e.target.checked) {
    calculatorPrice.innerHTML = 7;
  }
}); */

const discountArray = [discount1, discount2, discount3];
const discountValuesArray = [
  firstDiscountValue,
  secondDiscountValue,
  thirdDiscountValue
];
//not used now
const discountObj = [
  { discount1: firstDiscountValue },
  { discount2: secondDiscountValue },
  { discount3: thirdDiscountValue }
];
// 3 discount functions for each checkbox, to be changed to one function using discountobj
function discount1f(disc) {
  disc.addEventListener("change", e => {
    if (e.target.checked) {
      priceFunction(firstDiscountValue);
    }
    if (e.target.checked == false) {
      calculatorPrice.innerHTML = `${slider.value * 10}$`;
    }
  });
}
function discount2f(disc) {
  disc.addEventListener("change", e => {
    if (e.target.checked) {
      priceFunction(secondDiscountValue);
    }
    if (e.target.checked == false) {
      calculatorPrice.innerHTML = `${slider.value}$`;
    }
  });
}
function discount3f(disc) {
  disc.addEventListener("change", e => {
    if (e.target.checked) {
      priceFunction(thirdDiscountValue);
    }
    if (e.target.checked == false) {
      calculatorPrice.innerHTML = `${slider.value}$`;
    }
  });
}
discount1f(discount1);
discount2f(discount2);
discount3f(discount3);
