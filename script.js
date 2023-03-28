const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
    const weight = document.getElementById("weightInput").value;
    const height = document.getElementById("heightInput").value / 100; // Convert cm to m

    const bmi = (weight / (height * height)).toFixed(2);

    resultDiv.innerText = `Your BMI is: ${bmi}`;

    document.getElementById("weightInput").value = "";
    document.getElementById("heightInput").value = "";
});