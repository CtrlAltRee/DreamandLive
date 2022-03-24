// let myImage = document.getElementsByClassName("imgArt");
//     console.log(myImage)
// for (let i = 0; i < myImage.length; i++) {
//     myImage[i].addEventListener("mouseenter", alert("hover on image"));
//     myImage[i].addEventListener("mouseleave", alert("hover out image"));
//     }

let myImage = document.querySelectorAll(".imgArt");

myImage.forEach(function(element) {
    element.addEventListener("mouseenter", function() {
        this.classList.add("artwork");
    });
    element.addEventListener("mouseleave", function() {
        this.classList.remove("artwork");
    });
});

// let myImage = document.getElementsByClassName('.imgArt');

// myImage = Array.prototype.slice.call(myImage);

// myImage.forEach( function(element){
//     element.style.transform = "scale(1.2, 1.2)"; 
// });

// function hoverFunction() {
//    myImage.style.transform = "scale(1.2, 1.2)";
// }

// function hoverFunction2() {
//     myImage.style.transform = "scale(1,1)";
// }

// myImage.addEventListener("mouseenter", hoverFunction);
// myImage.addEventListener("mouseleave", hoverFunction2);

// let myImage1 = document.getElementById("imgArt1");

// function hoverFunction() {
//     myImage1.style.transform = "scale(1.2, 1.2)";
// }

// function hoverFunction2() {
//     myImage1.style.transform = "scale(1,1)";
// }

// myImage1.addEventListener("mouseenter", hoverFunction);
// myImage1.addEventListener("mouseleave", hoverFunction2);