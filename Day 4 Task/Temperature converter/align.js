document.addEventListener("DOMContentLoaded", function() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");

    // Convert Celsius to Fahrenheit
    celsiusInput.addEventListener("input", function() {
        let celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            fahrenheitInput.value = ((celsius * 9/5) + 32).toFixed(2);
        } else {
            fahrenheitInput.value = "";
        }
    });

    // Convert Fahrenheit to Celsius
    fahrenheitInput.addEventListener("input", function() {
        let fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            celsiusInput.value = ((fahrenheit - 32) * 5/9).toFixed(2);
        } else {
            celsiusInput.value = "";
        }
    });
});
function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    if (celsius !== "") {
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    }
}

function convertToCelsius() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    if (fahrenheit !== "") {
        let celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("celsius").value = celsius.toFixed(2);
    }
}

function resetFields() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
}