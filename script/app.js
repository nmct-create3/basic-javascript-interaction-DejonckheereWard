"use strict"

document.addEventListener( 'DOMContentLoaded', function(){

        console.log( 'Script loaded!' );

        handleFloatingLabel();
        handlePasswordSwitcher();
        handleQualityRange();

    });

function handleFloatingLabel(){
  let label = document.querySelector(".js-floating-label");
  let input = document.querySelector(".js-name-input");

  input.addEventListener("blur", function(){
    console.log("Blur detected");
    if(input.value != ""){
      console.log("Class added");
      label.classList.add("is-floating");
    } else{
      console.log("Class removed");
      label.classList.remove("is-floating");
    }
  });
};

function handlePasswordSwitcher() {
  let password = document.querySelector(".js-password-input");
  let password__checkbox = document.querySelector("#toggleCheckbox");

  password__checkbox.addEventListener("click", function(){
    console.log("Password visibility clicked");
    console.log(password.type);
    if (password.type == "text"){
      console.log("Password hidden");
      password.type = "password";
    }
    else{
      console.log("Password visible");
      password.type = "text";
    }
  });
}

function handleQualityRange() {
  let rangeInput = document.querySelector(".js-quality-input");
  let rangeHolder = document.querySelector(".js-range-holder");
  rangeInput.addEventListener("input", function(){
    rangeHolder.setAttribute('data-value', rangeInput.value);
    rangeHolder.style.marginleft = '${rangeinput.value}%';    
    console.info(rangeInput.value)
  });
};
