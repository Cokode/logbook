import formatDate from "../model/date.js";
import {info}  from "../model/Log.js";

const buy = document.querySelector('#buy');
const sell = document.querySelector('#sell');
const input = document.getElementById("input");


export function onbuttonclick(post) {
  
  buy.addEventListener('click', function() {
    const inputValue = input.value;

    if (!isNaN(parseFloat(inputValue))) {
      const numericValue = parseFloat(inputValue);

      // Example usage with Date.now()
      const currentTimestamp = Date.now();
      const formattedString = formatDate(currentTimestamp);
      console.log(formattedString);

      info.amount = numericValue;
      info.logType = "BUY";
      info.date = formattedString;

      console.log(formattedString + " formattedDate");
      console.log(numericValue + " numeric value");

      post('http://localhost:8080/log-record-buy', info);

      input.value = ""; 
      input.classList.remove('error');

    } else {
      input.classList.add("error");
      input.value = "invalid input";
     
    }

  });
  
}

  input.addEventListener('input', function() {
  input.classList.remove('error');
  
})
