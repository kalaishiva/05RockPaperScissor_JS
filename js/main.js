let computerChoice = document.getElementById("result-comp-stat");
let userChoice = document.getElementById("result-user-stat");

//create div with image element
let divElement = document.createElement("div");
let dummyImg = document.createElement("img");
divElement.append(dummyImg);
//console.log(divElement);
userChoice.append(divElement);

/* 
---div created for user image---
divElement = document.createElement("div");
userChoice.append(divElement);
console.log(userChoice); */

//get the all the 3 images through class.
let images = document.querySelectorAll(".choice");
console.log(images);



//get the image of each element..add the event listener for that image ..
for (const img of images) {
    //console.log(img);
    img.addEventListener('click', addImg);
}

function addImg(event) {
    let source = event.target;
    //console.log(source.src);   //http://127.0.0.1:5500/Images/rock.png
    let dummySrc = source.src;
    dummyImg.src = dummySrc;

}