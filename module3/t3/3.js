'use strict';

const names = ['John', 'Paul', 'Jones'];

let targetElement = document.getElementById("target");

names.forEach(function(text){
    let li = document.createElement('li');
    li.innerHTML = text;

    targetElement.appendChild(li)
});