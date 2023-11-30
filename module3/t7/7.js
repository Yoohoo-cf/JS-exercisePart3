"use strict";

const targetElement = document.getElementById("target");
const triggerElement = document.getElementById("trigger");

const originalImageSrc = targetElement.src;

triggerElement.addEventListener("mouseover", function(){
    targetElement.src="img/picB.jpg"
})

triggerElement.addEventListener("mouseout", function(){
    targetElement.src= originalImageSrc;
})


