let input = document.getElementById('input')
let from = document.getElementById('from')
let to = document.getElementById('to')
let Btn = document.getElementById('convertBtn')
let results = document.getElementById('resultContainer1')

var myHeaders = new Headers();
myHeaders.append("apikey", "NDEiXmN4qB0tA8a0n6AST5GLhDDt3g0b");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
let result = "";

fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  .then(response => response.json())
  .then(data => {
   for (let key in data.symbols) {
      result += `<option value='${key}' selected>${key}</option>`
   
   } 
   from.innerHTML = result;
   to.innerHTML = result;
}).catch(error => console.log('error', error));

function getdata(){
fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${input.value}`, requestOptions)
  .then(response => response.json())
  .then(data => {
    results.value = data.result;
  }) 
  .catch(error => console.log('error', error));
}
