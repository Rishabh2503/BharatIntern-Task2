function convert() {
  var celsius = document.getElementById("celsiusInput").value;
  var fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("result").innerHTML = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F";
  
  document.getElementById("fahrenheit").innerHTML = fahrenheit.toFixed(2) ;
}