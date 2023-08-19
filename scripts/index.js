let total = 0;
function cardClick(data) {
  const itemsListContainer = document.getElementById("new-items");
  const count = itemsListContainer.childElementCount;
  const itemName = data.childNodes[3].childNodes[3].innerText;
  console.log(itemName);
  const p = document.createElement("p");
  p.innerText = `${count + 1}. ${itemName}`;
  itemsListContainer.appendChild(p);
  const price = parseFloat(
    data.childNodes[3].childNodes[5].childNodes[0].innerText
  );
  total = total + price;
  document.getElementById("total-p").innerText = total;
  console.log(total);
  
}
