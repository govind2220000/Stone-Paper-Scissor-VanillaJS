//let showRulesValue = false;
const colorCode = { rock: "#0074b6", paper: "#ffa943", scissors: "#bd00ff" };
const gameElements = ["rock", "paper", "scissors"];
let computerInput = null;

if (window.location.pathname.includes("index.html")) {
  // Check if playerScore exists in localStorage
  if (!localStorage.getItem("playerScore")) {
    // If not, set the initial value
    localStorage.setItem("playerScore", 0);
  } else {
    document.querySelector(".player-score .display-score").textContent =
      localStorage.getItem("playerScore");
  }
  // Check if computerScore exists in localStorage
  if (!localStorage.getItem("computerScore")) {
    // If not, set the initial value
    localStorage.setItem("computerScore", 0);
  } else {
    document.querySelector(".computer-score .display-score").textContent =
      localStorage.getItem("computerScore");
  }
}

function playAgainWinner() {
  window.location.href = "winner.html";
}

function navigateToHome() {
  window.location.href = "index.html";
}

function showRules() {
  console.log("Showing rules");
  //For more convenience we can use this commented logic
  //   showRulesValue = !showRulesValue;
  //   console.log(showRulesValue);

  //   if (showRulesValue === false) {
  //     document.querySelector(".rule-container").style.display = "none";
  //     return;
  //   }
  document.querySelector(".rule-container").style.display = "block";
}

function closeRules() {
  console.log("Closing rules");
  //showRulesValue = false;
  document.querySelector(".rule-container").style.display = "none";
}

// Add event listener to the body element
//document.body.addEventListener("click", closeRules);

//Function to handle player selection
function handleClick(imageSrcPlayer, imageSrcComputer) {
  //Update the image based on player selection
  console.log("Handling click");

  document.querySelector(
    ".after-clicking .player img"
  ).src = `./assets/${imageSrcPlayer}.png`;

  //Scissors png has a different size hence we need to handle it separately
  if (imageSrcPlayer === "scissors") {
    document.querySelector(".after-clicking .player img").style.width =
      "2.675rem";
    document.querySelector(".after-clicking .player img").style.height = "3rem";
  }

  //Update the image based on computer selection
  document.querySelector(
    ".after-clicking .computer img"
  ).src = `./assets/${imageSrcComputer}.png`;

  //Scissors png has a different size hence we need to handle it separately
  if (imageSrcComputer === "scissors") {
    document.querySelector(".after-clicking .computer img").style.width =
      "2.675rem";
    document.querySelector(".after-clicking .computer img").style.height =
      "3rem";
  }

  //Show the after-clicking spart
  document.querySelector(".after-clicking").style.display = "flex";

  //Hide the before-clicking spart
  document.querySelector(".before-clicking").style.display = "none";
}

//Function to handle Play Again button
function playAgain() {
  document.querySelector(".after-clicking").style.display = "none";
  document.querySelector(".before-clicking").style.display = "flex";

  //If Play Again is clicked then we need to remove the next button from the last section div and reset the posiion of Rules button

  document.querySelector(".last-section .rules").style.gridColumn = "6/7";

  //If Play Again is clicked then we need to center the button as it is like that in figma
  document.querySelector(".last-section .rules").style.justifySelf = "center";

  document.querySelector(".last-section .nextButton").style.display = "none";
}

function gameResult(playerInput) {
  computerInput = gameElements[Math.floor(Math.random() * 3)];
  document.querySelector(".after-clicking .player").style.borderColor =
    colorCode[playerInput];
  document.querySelector(".after-clicking .computer").style.borderColor =
    colorCode[computerInput];
  console.log(
    `Player Input: ${playerInput} and Computer Input: ${computerInput}`
  );
  switch (playerInput) {
    case "rock":
      if (computerInput === "rock") {
        return -1; //tie
      }
      if (computerInput === "paper") {
        return 0; //lose
      }
      return 1; //win

    case "paper":
      if (computerInput === "paper") {
        return -1; //tie
      }
      if (computerInput === "scissors") {
        return 0; //lose
      }
      return 1; //win

    case "scissors":
      if (computerInput === "scissors") {
        return -1; //tie
      }
      if (computerInput === "rock") {
        return 0; //lose
      }
      return 1; //win
  }
}

function completeGame(playerInput) {
  const result = gameResult(playerInput);
  console.log(result);

  if (result === 0) {
    //If player loses then the player will get the border of yellow color and computer will get the border of purple color(not required)
    // document.querySelector(
    //   ".game-container .main-game .after-clicking .computer"
    // ).style.border = "16px solid #bd00ff";

    // document.querySelector(
    //   ".game-container .main-game .after-clicking .player"
    // ).style.border = "16px solid #FFA943";

    //If the player has lost the game

    //We have to change the button text to "PLAY AGAIN"

    document.querySelector(".after-clicking .display-area button").textContent =
      "PLAY AGAIN";

    document.querySelector(".display-area h1").textContent = "YOU LOST";
    localStorage.setItem(
      "computerScore",
      Number(localStorage.getItem("computerScore")) + 1
    );

    //Update the score in DOM
    document.querySelector(".computer-score .display-score").textContent =
      localStorage.getItem("computerScore");

    //Display the pulse Effect behind the computer who has won the game and remove the pulse effect from the old winner if exists

    if (document.querySelector(".pulse-effect")) {
      document.querySelector(".pulse-effect").remove();
    }

    document
      .querySelector(".computer-container")
      .insertAdjacentHTML(
        "afterbegin",
        '<div class="pulse-effect"><div class="pulse-effect circle-3"></div><div class="pulse-effect circle-2"></div><div class="pulse-effect circle-1"></div></div>'
      );
  }

  if (result === 1) {
    //If player wins then the player will get the border of purple color and computer will get the border of yellow color
    // document.querySelector(
    //   ".game-container .main-game .after-clicking .computer"
    // ).style.border = "16px solid #FFA943";

    // document.querySelector(
    //   ".game-container .main-game .after-clicking .player"
    // ).style.border = "16px solid #bd00ff";

    //*****If the player has won the game******

    //1. Display the winning message
    document.querySelector(".display-area h1").textContent = "YOU WON";
    localStorage.setItem(
      "playerScore",
      Number(localStorage.getItem("playerScore")) + 1
    );

    //2. Update the score in DOM
    document.querySelector(".player-score .display-score").textContent =
      localStorage.getItem("playerScore");

    //3. Display the pulse Effect behind the player who has won the game and remove the pulse effect from old winner if exists

    if (document.querySelector(".pulse-effect")) {
      document.querySelector(".pulse-effect").remove();
    }

    document
      .querySelector(".player-container")
      .insertAdjacentHTML(
        "afterbegin",
        '<div class="pulse-effect"><div class="pulse-effect circle-3"></div><div class="pulse-effect circle-2"></div><div class="pulse-effect circle-1"></div></div>'
      );
    //4. Add the next button if the player has won the game(We have to complete this task)

    //5.We have to change the button text to "PLAY AGAIN"

    document.querySelector(".after-clicking .display-area button").textContent =
      "PLAY AGAIN";

    document.querySelector(".last-section .rules").style.gridColumn = "5 / 6";
    //If the player has won the game then we will be moving the rules div to the end of the grid cell as it is like that in figma
    document.querySelector(".last-section .rules").style.justifySelf = "end";

    document.querySelector(".last-section .nextButton").style.display = "block";
  }

  if (result === -1) {
    //If result is tie then both player and computer will get the same border of blue color(this was not required)
    // document.querySelector(
    //   ".game-container .main-game .after-clicking .computer"
    // ).style.border = "16px solid #0074B6";

    // document.querySelector(
    //   ".game-container .main-game .after-clicking .player"
    // ).style.border = "16px solid #0074B6";

    //If the game is tie then this display area will be just an empty space
    document.querySelector(".display-area h2").style.textContent = "";

    //Display the tie message
    document.querySelector(".display-area h1").textContent = "TIE UP";
    document.querySelector(".display-area h1").style.cssText =
      "font-weight: 800; line-height: 45.7px; letter-spacing: 10%; color: #ffffff; text-align: center; margin: 2px 0;";

    //If the game is a tie then we have to remove pulse Effect from both players

    //We have to change the button text to "REPLAY"
    document.querySelector(".after-clicking .display-area button").textContent =
      "REPLAY";
    if (document.querySelector(".pulse-effect")) {
      document.querySelector(".pulse-effect").remove();
    }
  }

  //Update the image based on player selection
  handleClick(playerInput, computerInput);
}
