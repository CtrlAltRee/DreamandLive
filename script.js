let myImage = document.getElementById("imgArt");

function hoverFunction() {
    myImage.style.transform = "scale(1.2, 1.2)";
}

function hoverFunction2() {
    myImage.style.transform = "scale(1,1)";
}

myImage.addEventListener("mouseenter", hoverFunction);
myImage.addEventListener("mouseleave", hoverFunction2);