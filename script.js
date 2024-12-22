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
