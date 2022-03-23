let myImage = document.getElementById("imgArt");

function hoverFunction() {
    myImage.style.transform = "scale(1.2, 1.2)";
}

function hoverFunction2() {
    myImage.style.transform = "scale(1,1)";
}

myImage.addEventListener("mouseenter", hoverFunction);
myImage.addEventListener("mouseleave", hoverFunction2);

// let myImage1 = document.getElementById("imgArt1");

// function hoverFunction() {
//     myImage1.style.transform = "scale(1.2, 1.2)";
// }

// function hoverFunction2() {
//     myImage1.style.transform = "scale(1,1)";
// }

// myImage1.addEventListener("mouseenter", hoverFunction);
// myImage1.addEventListener("mouseleave", hoverFunction2);