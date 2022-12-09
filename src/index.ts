var btn = document.getElementById("idBotao") as HTMLButtonElement;
var check = document.getElementById("idcheck") as HTMLInputElement;
var btn2 = document.getElementById("atu") as HTMLButtonElement;
// var theme = window.localStorage.getItem("theme");
var imageLogoTop1 = document.getElementById("imageLogoTop1") as HTMLImageElement;
var imageLogoTop2 = document.getElementById("imageLogoTop2") as HTMLImageElement;
var imageLinkedin1 = document.getElementById("imageLinkedin1") as HTMLImageElement;
var imageLinkedin2 = document.getElementById("imageLinkedin2") as HTMLImageElement;

// if (theme === "dark") document.body.classList.add("dark");

check.addEventListener("click", () => {

    document.body.classList.toggle("dark");
    imageLogoTop1.hidden = true;
    imageLogoTop2.hidden = false;
    imageLinkedin1.hidden = true;
    imageLinkedin2.hidden = false;


    // if (check.checked == true) {

    // if (check.checked = false) 
    // else {
    //     document.body.classList.toggle("light");
    //     imageLogoTop1.hidden = false;
    //     imageLogoTop2.hidden = true;
    //     imageLinkedin1.hidden = false;
    //     imageLinkedin2.hidden = true;

    // }

    // if (theme === "dark") {
    //     window.localStorage.setItem("theme", "light");
    //   } else window.localStorage.setItem("theme", "dark");

    // while (document.body.classList.contains("dark")) {
    //     let darkMode = 'on'
    //     changeImage(darkMode);
    // }

    // if () {
    //     let darkMode = 'on'
    //     changeImage(darkMode);
    // }

});

btn2.addEventListener("click", () => {
    window.location.reload();
});


function changeImage(darkMode: string) {

    if (darkMode = 'on') {
        imageLogoTop1.hidden = true;
        imageLogoTop2.hidden = false;
        imageLinkedin1.hidden = true;
        imageLinkedin2.hidden = false;

    } else {
        imageLogoTop1.hidden = false;
        imageLogoTop2.hidden = true;
        imageLinkedin1.hidden = false;
        imageLinkedin2.hidden = true;
    }

}