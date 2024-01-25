import { changeButtonColor } from "./controller/changebuttoncolor.js";
import onclickBuyButton from "./controller/inputData.js";
import { onclickSellButton } from "./controller/inputData.js";
//import {logHistory}  from "./view/history.js";
import historyclick from "./controller/click-history.js";


const historyRequest = () => {
	let data = fetch('http://localhost:8080/get');

	data.then(Response => Response.json())
	.then(dada => console.log(dada))
	.catch(error => console.
		error('Error making GET request', error));
}

const postBuy = (url, info) => {
	fetch(url, {
	method:	'POST',
	headers: {
		'Content-Type': 'application/json',
	},
		body: JSON.stringify(info)
	})

	.then(Response => Response.json())
	.then(data => console.log(data))
	.catch(error => console.log('Error', error));
}

onclickBuyButton(postBuy);
onclickSellButton(postBuy);
//logHistory();
historyclick();




//historEntry.innerHTML = `Amount: ${key.amount} | Type: ${key.logType} | Date: ${key.date} | Time: ${key.time} | ID: ${key.id}`;



	
	
	
	
	

historyRequest();
changeButtonColor();
document.body.style.backgroundColor = "#5781b1";



//<img src="/view/images/dog.jpg" width="340" height="270"></img>