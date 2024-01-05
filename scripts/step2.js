function activarBoton($boton) {
    $software_btn.classList.remove("list-item-active");
    $user_btn.classList.remove("list-item-active");
    $graphic_btn.classList.remove("list-item-active");
  
    $boton.classList.add("list-item-active");
  }
  
  const $software_btn = document.querySelector("#software-btn");
  const $user_btn = document.querySelector("#user-btn");
  const $graphic_btn = document.querySelector("#graphic-btn");
  const $continue_btn = document.querySelector("#continue_btn")
  
  $software_btn.addEventListener('click', () => {
    activarBoton($software_btn);
  });
  
  $user_btn.addEventListener('click', () => {
    activarBoton($user_btn);
  });
  
  $graphic_btn.addEventListener("click", () => {
    activarBoton($graphic_btn);
  });
  

  $continue_btn.addEventListener('click', () => {
  
    window.location.href = "step3.html"
  })