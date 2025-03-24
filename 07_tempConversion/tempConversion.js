const convertToCelsius = function(degree) {
  let celc = (degree - 32) * 5/9;
  if (celc >= 0){
    celc = Math.round(celc * 10) / 10;
  }
  else{
    celc = Math.ceil(celc * 10) / 10;
  }
  return celc;
};

const convertToFahrenheit = function(degree) {
  let fheit = degree * 9/5 + 32;
  if (fheit >= 0){
    fheit = Math.round(fheit * 10) / 10;
  }
  else{
    fheit = Math.ceil(fheit * 10) / 10;
  }  
  return fheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
