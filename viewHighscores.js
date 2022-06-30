var userNameSpan = document.querySelector("#user-name");
var userScoreSpan = document.querySelector("#user-score");


renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var name = localStorage.getItem("name");
  var score = localStorage.getItem("score");

  if (!name || !score) {
    return;
  }

  userNameSpan.textContent = name;
  userScoredSpan.textContent = score;
}