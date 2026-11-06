
const form = document.getElementById("emiForm");
const result = document.getElementById("result");
const emiValue = document.getElementById("emiValue");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let p = Number(document.getElementById("amount").value);
  let rate = Number(document.getElementById("rate").value);
  let years = Number(document.getElementById("years").value);

  if (p <= 0 || rate < 0 || years <= 0 || years > 30 ||
      !Number.isInteger(years)) {
    alert("Please enter valid loan details");
    return;
  }

  let r = rate / 1200;
  let n = years * 12;
  let emi;

  if (r === 0) {
    emi = p / n;
  } else {
    emi = p * r * Math.pow(1 + r, n) /
          (Math.pow(1 + r, n) - 1);
  }

  emiValue.innerText = "₹" + emi.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  result.classList.remove("d-none");
});

// Reset the form and hide the result
form.addEventListener("reset", function() {
  result.classList.add("d-none");
});
