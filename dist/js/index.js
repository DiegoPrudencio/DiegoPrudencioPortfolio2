"use strict";
var btn = document.getElementById("botao");
var btn2 = document.getElementById("atu");
var theme = window.localStorage.getItem("theme");
var logoImage1 = document.getElementById("imageLogo1");
if (theme === "dark")
    document.body.classList.add("dark");
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (theme === "dark") {
        window.localStorage.setItem("theme", "light");
    }
    else
        window.localStorage.setItem("theme", "dark");
    logoImage1.hidden = true;
});
btn2.addEventListener("click", () => {
    window.location.reload();
});
