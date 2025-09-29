const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// Regex for Philippine numbers (09XXXXXXXXX or +639XXXXXXXXX)
const validPHNumber = /^(?:\+63|0)9\d{9}$/;

checkBtn.addEventListener("click", () => {
  const inputVal = userInput.value.trim();

  if (inputVal === "") {
    alert("Please provide a phone number");
    return;
  }

  if (validPHNumber.test(inputVal)) {
    resultsDiv.textContent = `✅ Valid PH number: ${inputVal}`;
    resultsDiv.style.color = "green";
  } else {
    resultsDiv.textContent = `❌ Invalid PH number: ${inputVal}`;
    resultsDiv.style.color = "red";
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
  userInput.value = "";
});
