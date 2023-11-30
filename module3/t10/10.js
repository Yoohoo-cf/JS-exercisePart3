"use strict";

window.onload = function (){
   document.getElementById("source").addEventListener("submit", function(e){
       e.preventDefault();
       let firstName = document.querySelector('input[name="firstname"]').value;
       let lastName = document.querySelector('input[name="lastname"]').value;

       document.getElementById("target").innerHTML = "Your name is " + firstName + " " + lastName;
   });
}



