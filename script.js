
let players = JSON.parse(localStorage.getItem("players")) || [];


window.onload = () => {
  renderPlayerList();
};

function renderPlayerList() {
  const listElement = document.getElementById("playerList");
  listElement.innerHTML = "";

  players.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = `${name}`;
    listElement.appendChild(li);
  });
}

function addPlayer() {
  const nameInput = document.getElementById("playerNameInput");
  const playerName = nameInput.value.trim();

  if (playerName === "") {
    alert("Please enter a name.");
    return;
  }


  players.push(playerName);


  localStorage.setItem("players", JSON.stringify(players));

  nameInput.value = "";
  renderPlayerList();
}

function removePlayer() {
  const nameIp = document.getElementById("playerNameIp");
  const removeName = nameIp.value;
  players.splice(removeName, 1);
  renderPlayerList();
}

//   MATCH TRACKING
console.log(JSON.stringify(players));


const result = "";

let player1, player2;

player1 = "";

