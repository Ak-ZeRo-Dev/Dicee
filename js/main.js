// Create Random Number To Change Img
function randomNums() {
  let num1 = Math.ceil(Math.random() * 6);
  let num2 = Math.ceil(Math.random() * 6);
  document.querySelector(`.img1`).src = `images/dice${num1}.png`;
  document.querySelector(`.img2`).src = `images/dice${num2}.png`;
  check(num1, num2);
}

// Check winner and Change msg to the winner
function check(num1, num2) {
  let winner = document.querySelector(`h1`);
  num1 > num2
    ? (winner.innerHTML = `🚩 Player 1  wins!`)
    : num1 === num2
    ? (winner.innerHTML = `Draw!`)
    : (winner.innerHTML = `Player 2  wins! 🚩`);
}

// Run code onload
window.onload = randomNums;
