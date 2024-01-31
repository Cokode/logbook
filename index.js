import express from 'express';
const app = express();





// import { changeButtonColor } from "./controller/changebuttoncolor.js";
// import onclickBuyButton from "./controller/inputData.js";
// import { onclickSellButton } from "./controller/inputData.js";
// //import {logHistory}  from "./view/history.js";
// import historyclick from "./controller/click-history.js";


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



	
	

historyRequest();
changeButtonColor();
//document.body.style.backgroundColor = "#5781b1";
document.body.style.backgroundColor = "#b6c8dc";



//<img src="/view/images/dog.jpg" width="340" height="270"></img>


const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});