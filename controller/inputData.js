import formatDate from "../model/date.js";
import {info}  from "../model/Log.js";
import Time from "../model/Time.js";

const buy = document.querySelector('#buy');
const sell = document.querySelector('#sell');
const input = document.getElementById("input");


export default function onclickBuyButton(post) {
  
  buy.addEventListener('click', function() {
    const inputValue = input.value;

    if (!isNaN(parseFloat(inputValue))) {
      const numericValue = parseFloat(inputValue);


       // Get and display formatted time
      const formattedTime = Time();
      console.log('Formatted Time:', formattedTime);

      // Get and display formatted date
      const formattedDate = formatDate();
      console.log('Formatted Date:', formattedDate);

      info.amount = numericValue;
      info.logType = "BUY";
      info.date = formattedDate;
      info.time = formattedTime;

      post('http://localhost:8080/log-record-buy', info);

      input.value = ""; 
      input.classList.remove('error');

    } else {
      input.classList.add("error");
      input.value = "invalid input";
    }

  }); 
}

export function onclickSellButton(post) {
  
  sell.addEventListener('click', function() {
    const inputValue2 = input.value;

    if (!isNaN(parseFloat(inputValue2))) {
      const numericValue = parseFloat(inputValue2);


       // Get and display formatted time
      const formattedTime = Time();
      console.log('Formatted Time:', formattedTime);

      // Get and display formatted date
      const formattedDate = formatDate();
      console.log('Formatted Date:', formattedDate);

      info.amount = numericValue;
      info.logType = "SALE";
      info.date = formattedDate;
      info.time = formattedTime;

      post('http://localhost:8080/log-record-sell', info);

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



// export function onclickSellButton(post) {

//   sell.addEventListener('click', function() {
//     const inputValue2 = input.value;

//     if (!isNaN(parseFloat(inputValue2))) {
//       const numericValue = parseFloat(inputValue2);

//       // Example usage with Date.now()
//       const currentTimestamp = Date.now();
//       const formattedString = formatDate(currentTimestamp);
//       const time = Time(currentTimestamp);

//       console.log(formattedString);

//       info.amount = numericValue;
//       info.logType = "BUY";
//       info.date = formattedString;
//       info.time = time;

//       console.log(formattedString + " formattedDate");
//       console.log(numericValue + " numeric value");

//       post('http://localhost:8080/log-record-sell', info);

//       input.value = ""; 
//       input.classList.remove('error');

//     } else {
//       input.classList.add("error");
//       input.value = "invalid input";
//     }

//   });

//     input.addEventListener('input', function() {
//     input.classList.remove('error');
    
//   })
//}


