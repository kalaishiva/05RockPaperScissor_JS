let userChoice = document.getElementById("result-user-stat");
let computerChoice = document.getElementById("result-comp-stat");
let Winner = document.getElementById("result-final-stat");
let userScore = document.getElementById("userScoreVal");
let computerScore = document.getElementById("compScoreVal");
// console.log(userScore);

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


//create div element to show the winner result
let winResult = document.createElement("span");
Winner.appendChild(winResult);



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
    let userId = event.currentTarget.id;

    //Computer random selection is created

    let randomNum = Math.floor(Math.random() * 3);
    //console.log(images[randomImage]);
    let parentDiv = images[randomNum];
    let dummySrc2 = parentDiv.children[0];
    dummyImg2.src = dummySrc2.src;

    let computerId = parentDiv.id;


    result(userId, computerId);

}

function result(user, computer) {
    if (user == computer) {
        // console.log("Match Draw");
        winResult.innerHTML = " Match Draw ";
        winResult.style.color = " purple";
    } else if ((user == "r" && computer == "s") || (user == "p" && computer == "r") || user == "s" && computer == "p") {
        //console.log("User Win");
        winResult.innerHTML = " User Win ";
        winResult.style.color = " darkgreen";
        userScore.innerText = parseInt(userScore.innerText) + 1;

    } else if ((user == "r" && computer == "p") || (user == "p" && computer == "s") || user == "s" && computer == "r") {
        //console.log("Computer Win");
        winResult.innerHTML = " Computer Win";
        winResult.style.color = " blue";
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
    }
}