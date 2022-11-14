"use strict";
const button = document.querySelector("input");
button.addEventListener("click", disableButton);
function disableButton() {
  button.disabled = true;
  buttom.value = "disabled";
  setTimeout(() => {
    button.disabled = false;
    button.value = "enroll";
  }, 2000);
}
//checkbox
const otherCheckBox = document.querySelector("#other");
const otherText = document.querySelector("#otherValue");
otherText.style.visibility = "hidden";

otherCheckBox.addEventListener("change", () => {
  if (otherCheckBox.checked) {
    otherText.style.visibility = "visible";
    otherText.value = "";
  } else {
    otherText.style.visibility = "hidden";
  }
});
//
