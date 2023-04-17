function convert() {
	const temp = document.getElementById("temp");
	const unit = document.getElementById("unit");
	const result = document.getElementById("result");
  
	if (temp.value === "") {
	  result.innerText = "Please enter a temperature";
	  return;
	}
  
	const temperatureValue = parseFloat(temp.value);
  
	if (isNaN(temperatureValue)) {
	  result.innerText = "Invalid temperature";
	  return;
	}
  
	if (unit.value === "celsius") {
	  const fahrenheit = (temperatureValue * 9/5) + 32;
	  result.innerText = `${temperatureValue}°C = ${fahrenheit.toFixed(2)}°F`;
	} else {
	  const celsius = (temperatureValue - 32) * 5/9;
	  result.innerText = `${temperatureValue}°F = ${celsius.toFixed(2)}°C`;
	}
  }
  

  