const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// Regex: Valid PH number formats (e.g., 0917..., +63917..., 917...)
const phRegex = /^(?:\+639|09)\d{9}$/;

checkBtn.addEventListener("click", () => {
  const input = userInput.value.trim();

  if (!input) {
    alert("Please provide a phone number");
    return;
  }

  if (phRegex.test(input)) {
    resultsDiv.textContent = `✅ Valid Philippine phone number: ${input}`;
    resultsDiv.style.color = "#4caf50";
  } else {
    resultsDiv.textContent = `❌ Invalid phone number format.`;
    resultsDiv.style.color = "#f44336";
  }
});

clearBtn.addEventListener("click", () => {
  userInput.value = "";
  resultsDiv.textContent = "";
});
