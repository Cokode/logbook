import express from 'express';
import { create }  from 'express-handlebars';

const app = express();
const hbs = create({defaultLayout: 'main'});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));


//import Handler from 'express-handlebars';

app.get('/', (req, res) => {

  res.render('home');
});

app.get('/home', (req, res) => {

  res.render('loggin-page');
});


async function result() {

	const data = await fetch('http://localhost:8080/get');
	const response = await data.json();

	console.log(response);

	return response;

}





// import { changeButtonColor } from "./controller/changebuttoncolor.js";
// import onclickBuyButton from "./controller/inputData.js";
// import { onclickSellButton } from "./controller/inputData.js";
// //import {logHistory}  from "./view/history.js";
// import historyclick from "./controller/click-history.js";


// const historyRequest = () => {
// 	let data = fetch('http://localhost:8080/get');

// 	data.then(Response => Response.json())
// 	.then(dada => console.log(dada))
// 	.catch(error => console.
// 		error('Error making GET request', error));
// }

// const postBuy = (url, info) => {
// 	fetch(url, {
// 	method:	'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// 		body: JSON.stringify(info)
// 	})

// 	.then(Response => Response.json())
// 	.then(data => console.log(data))
// 	.catch(error => console.log('Error', error));
// }

// onclickBuyButton(postBuy);
// onclickSellButton(postBuy);
// //logHistory();
// historyclick();



	
	

// historyRequest();
// changeButtonColor();
// //document.body.style.backgroundColor = "#5781b1";
// document.body.style.backgroundColor = "#b6c8dc";



// //<img src="/view/images/dog.jpg" width="340" height="270"></img>


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});