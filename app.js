document.getElementById("waiting").addEventListener("click", myFunction);
function myFunction(){
  document.querySelector("#main").innerHTML = `
  <div class="flex w-full bg-gray-600 rounded-md px-4 gap-4 py-2 items-center">
    <h2 class="font-medium text-xl">1.</h2>
    <div class="flex justify-between">
      <p class="text-lg text-gray-500">ID: 253784</p>
      <input type="checkbox">
    </div>
  </div>
  `;
  document.querySelector("#wp").textContent = "gay";
  console.log("hi");
}
