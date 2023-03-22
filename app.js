document.getElementById("waiting").addEventListener("click", displayWaitingPayout);
function displayWaitingPayout() {
  const saleList = JSON.parse(localStorage.getItem("saleData")) || [];
  document.querySelector("#waiting").classList.remove('bg-[#0f7173]');
  document.querySelector("#waiting").classList.add('bg-[#6faaab]');
  document.querySelector("#main").innerHTML = saleList.reverse().map((sale, index) => `
    <div class="flex bg-gray-300 rounded-md px-4 gap-4 py-2 items-center" data-index="${index}">
      <div class="flex justify-between items-center w-full">
        <div>
          <p class="text-lg text-white">${sale}</p>
        </div>
        <div class="flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0f7173" class="cursor-pointer bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          <div id="deleteitem">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF0000" class="cursor-pointer bi bi-x-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}
displayWaitingPayout();


/* SALE'S SAVING FUNCTION*/
let saleInput = document.querySelector("#salevalue");
let saleFormId = document.querySelector("#formsale");

saleFormId.addEventListener('submit', (e) => {
  e.preventDefault();

  if(saleInput.value == ''){
    saleInput.classList.add('outline-red-600');
    saleInput.placeholder = "Please enter a value";
  }
  else {
    let mySale = saleInput.value;
    saveSale();
    console.log("This sale has been added: " + mySale);
    saleInput.classList.add('outline-green-600');
    saleInput.value = "";
  }
});

function saveSale() {
  const saleData = saleInput.value;
  if (saleData) {
    // Retrieve the existing sale list from local storage
    const saleList = JSON.parse(localStorage.getItem("saleData")) || [];
    // Add the sale data to the sale list
    saleList.push(saleData);
    // Save the updated sale list to local storage
    localStorage.setItem("saleData", JSON.stringify(saleList));
    console.log("Sale saved");
    // You can do whatever you want with the updated sale list, for example, display it on the page
    console.log(saleList);
    displayWaitingPayout();
    let discordwebhook = localStorage.getItem('discordwebhook');
    newSaleWebhook(discordwebhook);
    }
}

/* SALE'S DELETE FUNCTION*/
function deleteSale(index) {
  const saleList = JSON.parse(localStorage.getItem("saleData")) || [];
  saleList.splice(index, 1);
  localStorage.setItem("saleData", JSON.stringify(saleList));
  displayWaitingPayout();
}

document.querySelector("#deleteitem").addEventListener("click", (event) => {
  const index = event.target.closest(".flex").getAttribute("data-index");
  deleteSale(index);
});




/***************************************************************************/
                              /* SETTINGS */
/***************************************************************************/


/*----------- WEBHOOKS -----------*/
/* SEND WEBHOOK TEST FUNCTION*/
function sendWebhookTest(discordwebhook) {
  let url = discordwebhook;
  const params = {
    username: "Restocks Payout Tracker",
    avatar_url: "https://pbs.twimg.com/profile_images/1502207992883777537/Q_LgbS4-_400x400.jpg",
    content: "Your webhook works well ✅"
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(params)
  };
  fetch(url, requestOptions);
}

/* SEND WEBHOOK NEW SALE FUNCTION*/
function newSaleWebhook(discordwebhook) {
  let url = discordwebhook;
  let saleInput = document.querySelector("#salevalue");
  const saleData = saleInput.value;
  const params = {
    "embeds": [{
      "username": "Restocks Payout Tracker",
      "thumbnail": {
        "url": "https://pbs.twimg.com/profile_images/1502207992883777537/Q_LgbS4-_400x400.jpg"
      },
      "description": `New sale added ✅
      Sale ID: ${saleData}`
    }]
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(params)
  };
  fetch(url, requestOptions);
}

/* WEBHOOK SAVING FUNCTION*/
let input = document.querySelector("#urlwebhook");
let webhookform = document.querySelector("#formwebhook");
let discordwebhook = '';

webhookform.addEventListener('submit', (e) => {
  e.preventDefault();

  if(input.value == ''){
  }
  else {
  discordwebhook = input.value;
  input.classList.add('outline-green-600');
  sendWebhookTest(discordwebhook);
  localStorage.setItem('discordwebhook', discordwebhook);
  }
});


/*----------- BTN SETTINGS -----------*/
/* BTN WEBHOOK FUNCTION*/
document.querySelector("#addformwebhook").addEventListener("click", showForm);
function showForm() {
  var x = document.getElementById("formwebhook");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/* SETTINGS SALE FUNCTION*/
document.querySelector("#addsale").addEventListener("click", showSale);
function showSale() {
  var x = document.getElementById("formsale");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
