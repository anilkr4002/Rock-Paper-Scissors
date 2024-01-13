// var user = 0, comp = 0;

// function Draw(userid) {
//   document.querySelector(".text").innerHTML = "Game Draw ! Play Again";

// }
// function Compwin(userid, arr) {
//   document.querySelector(".text").innerHTML = "You lose! " + arr + " beats your " + userid;
// }
// function Youwin(userid, arr) {
//   document.querySelector(".text").innerHTML = "You win! Your " + userid + " beats " + arr;
// }



// function winscore() {
//   document.querySelector(".text").style.backgroundColor = "green";
//   var score = document.getElementById("point");
//   // console.log(score);
//   user++;
//   score.innerHTML = user;
// }
// function cwinscore() {
//   document.querySelector(".text").style.backgroundColor = "red";
//   var score = document.getElementById("cpoint")
//   // console.log(score);
  
//   comp++;

//   score.innerHTML = comp;
// }

// const choices = document.querySelectorAll(".image");

// choices.forEach((image) => {
//   image.addEventListener("click", () => {
//     const userChoice = image.getAttribute("id");
//     makeSound();
//     playGame(userChoice);

//   });
// });

// function playGame(userid){

//   // console.log(userid);

//   var arr = ["rock", "paper", "scissors"];
//   var random = Math.floor(Math.random() * 3);
//   // console.log(arr[random]);

//   if (arr[random] === userid) {
//     Draw(userid);
//   document.querySelector(".text").style.backgroundColor = "black";

//   }
//   else {
//     if (userid === "rock") {
//       if (arr[random] === "paper") {
//         Compwin(userid, arr[random]);
//         cwinscore();
//       }
//       else {
//         Youwin(userid, arr[random]);
//         winscore();
//       }
//     }
//     else if (userid === "paper") {
//       if (arr[random] === "scissors") {
//         Compwin(userid, arr[random]);
//         cwinscore();

//       }
//       else {
//         Youwin(userid, arr[random]);
//         winscore();

//       }
//     }
//     if (userid === "scissors") {
//       if (arr[random] === "paper") {
//         Compwin(userid, arr[random]);
//         cwinscore();

//       }
//       else {
//         Youwin(userid, arr[random]);
//         winscore();

//       }
//     }

//   }
//   makeSound();

// }

// function makeSound() {
//   var audio = new Audio("./snare.mp3");
//   audio.play();
//   audio.volume = 0.01;
// }
// document.getElementById("restartButton").addEventListener('click', function () {
//             location.reload();
//         });

// const container = document.querySelector('.container');
// const restartButtonContainer = document.getElementById('restartButtonContainer');
// container.addEventListener('click', function () {
//     restartButtonContainer.style.display = 'block'; // Show the restart button container
//       });
var user = 0, comp = 0;

function Draw(userid) {
  document.querySelector(".text").innerHTML = "Game Draw! Play Again";
}
function Compwin(userid, arr) {
  document.querySelector(".text").innerHTML = "You lose! " + arr + " beats your " + userid;
}
function Youwin(userid, arr) {
  document.querySelector(".text").innerHTML = "You win! Your " + userid + " beats " + arr;
}

function winscore() {
  document.querySelector(".text").style.backgroundColor = "green";
  var score = document.getElementById("point");
  user++;
  score.innerHTML = user;
  toggleRestartButton(true); // Show the restart button
}
function cwinscore() {
  document.querySelector(".text").style.backgroundColor = "red";
  var score = document.getElementById("cpoint");
  comp++;
  score.innerHTML = comp;
  toggleRestartButton(true); // Show the restart button
}

const choices = document.querySelectorAll(".image");

choices.forEach((image) => {
  image.addEventListener("click", () => {
    const userChoice = image.getAttribute("id");
    makeSound();
    playGame(userChoice);
  });
});

function playGame(userid) {
  var arr = ["rock", "paper", "scissors"];
  var random = Math.floor(Math.random() * 3);

  if (arr[random] === userid) {
    Draw(userid);
    document.querySelector(".text").style.backgroundColor = "black";
  } else {
    if (userid === "rock") {
      if (arr[random] === "paper") {
        Compwin(userid, arr[random]);
        cwinscore();
      } else {
        Youwin(userid, arr[random]);
        winscore();
      }
    } else if (userid === "paper") {
      if (arr[random] === "scissors") {
        Compwin(userid, arr[random]);
        cwinscore();
      } else {
        Youwin(userid, arr[random]);
        winscore();
      }
    }
    if (userid === "scissors") {
      if (arr[random] === "paper") {
        Compwin(userid, arr[random]);
        cwinscore();
      } else {
        Youwin(userid, arr[random]);
        winscore();
      }
    }
  }
  makeSound();
}

function makeSound() {
  var audio = new Audio("./snare.mp3");
  audio.play();
  audio.volume = 0.01;
}

document.getElementById("restartButton").addEventListener('click', function () {
  location.reload();
});

// Function to toggle the visibility of the restart button
function toggleRestartButton(show) {
  const restartButtonContainer = document.getElementById('restartButtonContainer');
  restartButtonContainer.style.display = show ? 'block' : 'none';
}

// Hide the restart button initially
toggleRestartButton(false);
