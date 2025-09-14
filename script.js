let choices = document.querySelectorAll(".choice"); 
let playerChoiceText = document.getElementById("playerChoice");
let aiChoiceText = document.getElementById("aiChoice");
let resultText = document.getElementById("result");


choices.forEach(button => {
  button.addEventListener("click", () => {
    let playerChoice = button.getAttribute("data-choice"); 
    let aiChoice = getAiChoice();
    let result = getWinner(playerChoice, aiChoice);

    playerChoiceText.textContent = "You chose: " + playerChoice;
    aiChoiceText.textContent = "AI chose: " + aiChoice;
    resultText.textContent = "Result: " + result;
  });
});


function getAiChoice() {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}


function getWinner(player, ai) {
  if (player === ai) return "It's a Draw 😐";
  
  if (
    (player === "rock" && ai === "scissors") ||
    (player === "paper" && ai === "rock") ||
    (player === "scissors" && ai === "paper")
  ) {
    return "You Win 🎉";
  }
  return "You Lose 😢";
}
