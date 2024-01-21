import { changeButtonColor } from "./controller/changebuttoncolor.js";
import { onbuttonclick } from "./controller/inputData.js";


const historyRequest = () => {
	let data = fetch('http://localhost:8080/get');

	data.then(Response => Response.text()).then(dada => console.log(dada)).catch(error => console.error('Error making GET request', error));
}

 const postBuy = (url, info) => {
	fetch(url, {
	method:	'POST',
	headers: {
		'Content-Type': 'application/json'
	},
		body: JSON.stringify(info)
	})

	.then(Response => Response.json())
	.then(data => console.log(data))
	.catch(error => console.log('Error', error));

		//onbuttonclick(postBuy, info);
}

onbuttonclick(postBuy);



// fetch('http://localhost:8080/log-record-sell', {
// 	method:	'POST',
// 	headers: {
// 		'Content-Type': 'application/json'
// 	},
// 		body: JSON.stringify(info)
// })

// .then(Response => Response.json())
// .then(data => console.log(data))
// .catch(error => console.log('Error', error));




historyRequest();
changeButtonColor();
document.body.style.backgroundColor = "#5781b1";



//<img src="/view/images/dog.jpg" width="340" height="270"></img>