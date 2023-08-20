let total = 0;
let discount = 0;

function cardClick(data) {
  const itemsListContainer = document.getElementById("new-items");
  const count = itemsListContainer.childElementCount;
  const itemName = data.childNodes[3].childNodes[3].innerText;
  const p = document.createElement("p");
  p.innerText = `${count + 1}. ${itemName}`;
  itemsListContainer.appendChild(p);
  const price = data.childNodes[3].childNodes[5].childNodes[0].innerText;
  total = parseFloat(total) + parseFloat(price);
  document.getElementById("total-p").innerText = total.toFixed(2);
  document.getElementById("checkout").innerText = total.toFixed(2);
  activeMakePurchase();
  activeApply();
}

function activeMakePurchase() {
  condition("purchase", 1);
}
function activeApply() {
  condition("apply", 200);
}

function discountApply() {
  const couponField = document.getElementById("coupon");
  const coupon = couponField.value;
  if (coupon != "SELL200") {
    alert("Please enter a valid coupon.");
  } else {
    discount = (total * 20) / 100;
    const finalPrice = total - discount;
    document.getElementById("discount").innerText = discount.toFixed(2);
    document.getElementById("checkout").innerText = finalPrice.toFixed(2);
  }
  couponField.value = "";
}

function homePage() {
  window.location.href = "index.html";
}
