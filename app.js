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



document.getElementById("addbtn").addEventListener("click", myFunction);
function myFunction(){
  
}
