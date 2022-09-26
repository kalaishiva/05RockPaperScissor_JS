let userChoice = document.getElementById("result-user-stat");
let computerChoice = document.getElementById("result-comp-stat");

//create div with image element
let divElement1 = document.createElement("div");
let dummyImg1 = document.createElement("img");
divElement1.append(dummyImg1);
//console.log(divElement);
userChoice.append(divElement1);


//create div with image element in the computer
let divElement2 = document.createElement("div");
let dummyImg2 = document.createElement('img');
divElement2.append(dummyImg2);
computerChoice.append(divElement2);



/* 
---div created for user image---
divElement = document.createElement("div");
userChoice.append(divElement);
console.log(userChoice); */

//get the all the 3 images through class.
let images = document.querySelectorAll(".choice");
console.log(images);


//User Image is created
//get the image of each element..add the event listener for that image ..
for (const img of images) {
    //console.log(img);
    img.addEventListener('click', addImg);
}

function addImg(event) {
    let source = event.target;
    //console.log(source.src);   //http://127.0.0.1:5500/Images/rock.png
    let dummySrc1 = source.src;
    dummyImg1.src = dummySrc1; //user selection shown


    //Computer random selection is created

    let randomNum = Math.floor(Math.random() * 3);

    //console.log(images[randomImage]);

    let parentDiv = images[randomNum];
    //console.log(parentDiv);
    let dummySrc2 = parentDiv.children[0];
    dummyImg2.src = dummySrc2.src;


    // let result = images[randomImage]
    // let dummySrc2 = randomImage.src;
    // dummyImg2.src = images[randomImage].nextSibling;
    // console.log(images[randomImage]);






}


//