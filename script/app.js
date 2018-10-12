document.addEventListener( 'DOMContentLoaded', function(){

        console.log( 'Script loaded!' );

        handleFloatingLabel();

    });

function handleFloatingLabel(){
  let label = document.querySelector(".js-floating-label");
  let input = document.querySelector(".js-name-input");

  input.addEventListener("blur", function(){
    console.log("Blur detected")
    if(input.value != ""){
      console.log("Class added")
      label.classList.add("is-floating");
    } else{
      console.log("Class removed")
      label.classList.remove("is-floating");
    }
  })
};
