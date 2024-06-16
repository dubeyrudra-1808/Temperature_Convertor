function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  if (isNaN(valNum)) {
    document.getElementById("outputFahrenheit").innerHTML = " ";
  } else {
    let fahrenheit = (valNum * 1.8) + 32;
    document.getElementById("outputFahrenheit").innerHTML = fahrenheit.toFixed(2);
  }
}
