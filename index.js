// Travers method
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

const callBtns = document.getElementsByClassName("call-btn");
// console.log(callBtns);

for (let callButton of callBtns) {
  callButton.addEventListener("click", function () {
    const helplineTitle = callButton.parentNode.childNodes[3].innerText;

    // console.log(helplineTitle);
    const helplineNumber = callButton.parentNode.childNodes[7].innerText;

    const callHistoryContainer = getElement("call-history-container");

    let totalCoin = getElement("coin").innerText;
    // console.log(totalCoin);
    if (totalCoin < 20) {
      alert("Insufficient coin balance to make a call.");
      return;
    }
    let newTotalCoin = Number(totalCoin) - 20;

    getElement("coin").innerText = newTotalCoin;
    alert(`Calling ${helplineTitle} - ${helplineNumber}`);

    const newCart = document.createElement("div");
    newCart.innerHTML = `
     <div class="bg-[#FAFAFA] flex items-center justify-between p-3">
            <div>
              <h1> ${helplineTitle} </h1>
              <span>${helplineNumber} </span>
            </div>
            <div>
              <span>${new Date().toLocaleTimeString()}</span>
            </div>
          </div>
    `;

    callHistoryContainer.append(newCart);

    // const quantity = getElement("total-quantity").innerText;
    // console.log(quantity);

    // const currentQuantity = Number(quantity) + 1;
    // getElement("total-quantity").innerText = currentQuantity;
  });
}

const copyBtns = document.getElementsByClassName("copy");
// console.log(copyBtns);

for (let button of copyBtns) {
  button.addEventListener("click", function () {
    let totalCopy = document.getElementById("copy-btn").innerText;
    let newTotalCoy = Number(totalCopy) + 1;

    document.getElementById("copy-btn").innerText = newTotalCoy;
  });
}

document.getElementById("clear-btn").addEventListener("click", function () {
  const callHistoryContainer = getElement("call-history-container");
  callHistoryContainer.innerHTML = "";
});
