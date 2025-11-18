// BMI Calculator Logic
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bmiForm");
  const result = document.getElementById("bmiResult");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const height = parseFloat(document.getElementById("height").value);
      const weight = parseFloat(document.getElementById("weight").value);

      if (height > 0 && weight > 0) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        let status = "";
        if (bmi < 18.5) status = "Underweight 🥗";
        else if (bmi < 24.9) status = "Normal weight 💪";
        else if (bmi < 29.9) status = "Overweight ⚖️";
        else status = "Obese 🚨";

        result.innerHTML = `
          <p>Your BMI is <span class="text-primary fs-4">${bmi}</span></p>
          <p>Status: <span class="fw-bold">${status}</span></p>
        `;
      } else {
        result.innerHTML = `<p class="text-danger">Please enter valid numbers!</p>`;
      }

  
    });
  }
});

// Back Button Logic

function backButton(){
  window.history.back();
}
