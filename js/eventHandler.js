let clickCount = 0;
let timerSeconds = 5;

function clickCounter() {
  clickCount++;
  document.getElementById(
    "clickCountDisplay"
  ).innerText = `Click count: ${clickCount}`;

  setTimeout(function () {
    // Disable button after 5 seconds
    document.getElementById("counterButton").disabled = true;

    // Update timer each second
    if (timerSeconds > 0) {
      --timerSeconds;
      document.getElementById(
        "timerDisplay"
      ).innerText = `Timer: ${timerSeconds}s`;
    }
  }, 5000);
}

function resetCounter() {
  clickCount = 0;
  document.getElementById("clickCountDisplay").innerText = "Click count: 0";
  document.getElementById("counterButton").disabled = false;
  document.getElementById("timerDisplay").innerText = "Timer: 0s";
}
