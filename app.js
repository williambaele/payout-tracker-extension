document.getElementById("waiting").addEventListener("click", myFunction);
function myFunction(){
  document.querySelector("#main").innerHTML = `
  <div class="flex bg-[#939499] rounded-md px-4 gap-4 py-2 items-center">
    <div>
      <h2 class="font-medium text-md rounded-full bg-[#0f7173] p-1 flex items-center justify-center text-white">1</h2>
    </div>
    <div class="flex justify-between items-center w-full">
      <p class="text-lg text-white">ID: 253784</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0f7173" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>
    </div>
  </div>
  `;
}



/* SEND WEBHOOK FUNCTION*/
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
  updateLastCalled();
}


/* WEBHOOK SAVING FUNCTION*/
let input = document.querySelector("#urlwebhook");
let webhookform = document.querySelector("#formwebhook");

webhookform.addEventListener('submit', (e) => {
  e.preventDefault();

  if(input.value == ''){
  }
  else {
  let discordwebhook = input.value;
  sendWebhookTest(discordwebhook);
  }
});


/* SETTINGS WEBHOOK FUNCTION*/
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
