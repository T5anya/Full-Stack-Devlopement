// create a basic number guessing game using while //to ask untill tha correct number is guessed
let secretNumber = 5;
let guess;
let attempts = 0;

while (guess !== secretNumber) {
  guess = Number(prompt("Guess the number (1–10)"));
  attempts++;

  if (guess < secretNumber) {
    alert("Too low!");
  } else if (guess > secretNumber) {
    alert("Too high!");
  } else {
    alert("🎉 Correct! Attempts: " + attempts);
  }
}


using chat gpt with ui html css js

<!DOCTYPE html>
<html>
<head>
  <title>Guess the Number Game</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f2f2f2;
      text-align: center;
      padding-top: 100px;
    }

    .game-box {
      background: white;
      width: 300px;
      margin: auto;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }

    input {
      padding: 8px;
      width: 80%;
      margin: 10px 0;
    }

    button {
      padding: 8px 15px;
      cursor: pointer;
    }

    p {
      font-weight: bold;
    }
  </style>
</head>

<body>

  <div class="game-box">
    <h2>Guess the Number</h2>
    <p>Guess a number between 1 and 10</p>

    <input type="number" id="guessInput" />
    <br>
    <button onclick="checkGuess()">Guess</button>

    <p id="result"></p>
    <p id="attempts"></p>
  </div>

  <script>
    let secretNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;
    let guessedCorrectly = false;

    function checkGuess() {
      let guess = Number(document.getElementById("guessInput").value);
      attempts++;

      // while logic concept
      while (!guessedCorrectly) {
        if (guess < secretNumber) {
          document.getElementById("result").innerText = "Too Low ❌";
          break;
        } 
        else if (guess > secretNumber) {
          document.getElementById("result").innerText = "Too High ❌";
          break;
        } 
        else {
          document.getElementById("result").innerText = "🎉 Correct! You won!";
          guessedCorrectly = true;
          break;
        }
      }

      document.getElementById("attempts").innerText =
        "Attempts: " + attempts;
    }
  </script>

</body>
</html>