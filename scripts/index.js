let total = 0;
function cardClick(data) {
  const itemsListContainer = document.getElementById("new-items");
  const count = itemsListContainer.childElementCount;
  const itemName = data.childNodes[3].childNodes[3].innerText;
  console.log(itemName);
  const p = document.createElement("p");
  p.innerText = `${count + 1}. ${itemName}`;
  itemsListContainer.appendChild(p);
  const price = data.childNodes[3].childNodes[5].childNodes[0].innerText;
  total = parseFloat(total) + parseFloat(price);
  document.getElementById("total-p").innerText = total.toFixed(2);
  console.log(total);
}
