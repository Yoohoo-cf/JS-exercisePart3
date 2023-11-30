"use strict";

const ulElement = document.getElementById("target");

const htmlCode = "<li>First item</li>\n" +
    "<li>Second item</li>\n" +
    "<li>Third item</li>"

ulElement.innerHTML = htmlCode;

ulElement.classList.add("my-list");
