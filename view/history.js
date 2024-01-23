export const logHistory = async () => {


    try {
      const response = await fetch('http://localhost:8080/get');
      const datat = await response.json(); // Assuming the data is in JSON format
      
      const sec = document.querySelector("#history-class");
      sec.style.backgroundColor = "white";
  
      const historHead = `Date and Time       |       Type       |      Amount      | `;
      console.log(historHead);

      document.getElementById("log-title").append(historHead);


      for (var data of datat) {
        const historyEntry = document.createElement("p");
        const div = document.createElement("div");

        historyEntry.textContent = `${data.amount} | 
        ${data.logType} | ${data.date} | ${data.time} | `;

        div.append(historyEntry);
        sec.appendChild(div);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  



  //  // Now 'data' is an array of objects, and you can iterate over it
  //  for (const obj of data) {
  //   console.log(obj);
  //   // Do whatever you need with each object
  // }


  
       