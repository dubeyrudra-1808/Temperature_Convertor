function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    if (isNaN(valNum)) {
        document.getElementById("outputCelcius").innerHTML = " ";
    } else {
        valNum = valNum.toFixed(2);
        document.getElementById("outputCelcius").innerHTML = ((valNum - 32) / 1.8).toFixed(2);
    }

}