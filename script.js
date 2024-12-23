//let showRulesValue = false;
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
document.body.addEventListener("click", closeRules);

//Function to handle player selection
function handleClick(imageSrc) {
  //Update the image based on player selection
  document.querySelector(
    ".after-clicking .player img"
  ).src = `./assets/${imageSrc}.png`;

  //Scissors png has a different size hence we need to handle it separately
  if (imageSrc === "scissors") {
    document.querySelector(".after-clicking .player img").style.width =
      "2.675rem";
    document.querySelector(".after-clicking .player img").style.height = "3rem";
  }

  //Update the image based on computer selection
  document.querySelector(
    ".after-clicking .computer img"
  ).src = `./assets/${imageSrc}.png`;

  //Scissors png has a different size hence we need to handle it separately
  if (imageSrc === "scissors") {
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
}
