export const logHistory = async () => {


    try {
      const response = await fetch('http://localhost:8080/get');
      const datat = await response.json(); // Assuming the data is in JSON format
      
      // const sectionMain = document.querySelector("#section-main-history");
      // sectionMain.style.backgroundColor = "white";
  
      const table = document.getElementById("transaction-section");
      table.style.backgroundColor = "brown";
 
      for (var data of datat) {
       const title_frame = document.createElement("div"); // frame state
       title_frame.className = "transaction_frame";

       const date_time = document.createElement("div");
       date_time.id = "float-box";
       date_time.textContent = `${data.date} ${data.time}`

       const type = document.createElement("div");
       type.id = "float-box";
       type.textContent = data.logType;
       type.style.fontWeight = "bold";

       if (type.innerText == "BUY") {
        type.style.color = "green";
       } else {
        type.style.color = "red";
       }
       

       const amount = document.createElement("div");
       amount.id = "float-box"; // frame end
       amount.textContent = data.amount;

       title_frame.append(date_time, type, amount);

       table.append(title_frame);
  
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


  
       