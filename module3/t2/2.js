"use strict";

let targetElement = document.querySelector("#target");

let li1 = document.createElement("li");
let text1 = document.createTextNode("First item");

let li2 = document.createElement("li");
let text2 = document.createTextNode("Second item");
li2.classList.add("my-item");

let li3 = document.createElement("li");
let text3 = document.createTextNode("Third item");

li1.appendChild(text1);
li2.appendChild(text2);
li3.appendChild(text3);

targetElement.appendChild(li1);
targetElement.appendChild(li2);
targetElement.appendChild(li3);



