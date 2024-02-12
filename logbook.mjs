import express from 'express';
import { create } from 'express-handlebars';
import bodyParser from 'body-parser';
import getFortune from './lib/fortune.mjs';
import { Logs } from './component/Logs.mjs';
import { hello } from './component/esmodule/Hello.mjs';
import session from 'express-session';
//import jslint from

const app = express();
const hbs =  create ({
	extname: 'handlebars',
	defaultLayout: 'main',
	partialsDir: './views/partials', 
});
// const hbs = create({defaultLayout: 'main'});

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	res.locals.showTests = app.get('env') != 'production' && 
		req.query.test === '1';
		next();
});

app.use(function(req, res, next)  {
	if(!res.locals.partials) res.locals.partials = {};
		res.locals.partials.weather = Logs();
	next();
});

app.use(session({
	secret: 'your-secret-key',
	resave: false,
	saveUninitialized: true
}));

app.get('/headers', (req, res) => {
	res.set('Content-type', 'text/plain');

	console.log(req.signedCookies);
	var s = '';

	for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
	res.send(s);
});

app.get('/twitter', (req, res) => {
	res.render('twitter-sign-up', {
		layout: 'home-layout', 
		csrf: 'CSRF token goes here'});
});

app.post('/process', (req, res) => {
	console.log('Form (from querystring): ' + req.query.form);
	console.log('CSRF token (from hidden form field): ' + req.body._csrf);
	console.log('Name (from visible form field): ' + req.body.name);
	console.log('Email (from visible form field): ' + req.body.email);
	res.redirect(303, '/thank-you');
});

app.get('/thank-you', (req, res) => {
	res.render('thankyou', {layout: false});
});
 
app.get('/es', (req, res) => {
	hello();
	res.set('content-type', 'text/plain');
	res.send('Hello welcome');
});

app.get('/', (req, res) => {
  res.render('home', { layout: 'home-layout'});
});

app.get('/forgot-password', (req, res) => {
  res.render('forgot-password', { layout: 'main'});
});

app.get('/sign-up', (req, res) => {
	res.render('sign-up', { layout: 'home-layout'});
});

app.post('/login', (req, res) => { 
	console.log('I was here 303 redirect after login');
	req.session.formSubmitted = true;

	res.redirect(303, '/home');
});

app.get('/home', (req, res) => {
	// Check if the form was successfully submitted
	if (req.session.formSubmitted) {
		// Render the thank you page
			res.render('thankyou');
		} else {
		// Redirect user to home page or show an error page
			console.log('redirected to home not logged in');
			res.redirect('/');
		}
});
 

app.post('/sign-up-post', (req, res) => {
	let data = req.body;

	let firstName = data.firstName;
	let lastname = data.lastName;

	res.send('Welcome to LogBook : ' + firstName + " " + lastname);
	console.log('login sucessful!');
});

app.get('/about', (req, res) => {
	res.render('about', { layout: 'home-layout', 
	pageTestScript: '/qa/tests-about.js', name : 'Collins'});
});


(async function result() {

	// const data = await fetch('http://localhost:8080/get');
	// const response = await data.json();

	// console.log(response);

	// return response;

})();


app.use(function(req, res, next) {
	res.status(404);
	
	res.render('404', {layout: 'home-layout', fortune : getFortune()});
});


app.use(function(err, req, res, next) {

	res.status(505); 
	res.render('505', {layout: 'home-layout'});
});




 //import { changeButtonColor } from "./controller/changebuttoncolor.js";
 //import onclickBuyButton from "./controller/inputData.js";
 //import { onclickSellButton } from "./controller/inputData.js";
 //import {logHistory}  from "./view/history.js";
 //import historyclick from "./controller/click-history.js";


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

 //onclickBuyButton(postBuy);
 //onclickSellButton(postBuy);
 //logHistory();
 //historyclick();



	
	

// historyRequest();
 //changeButtonColor();
// //document.body.style.backgroundColor = "#5781b1";
// document.body.style.backgroundColor = "#b6c8dc";



// //<img src="/view/images/dog.jpg" width="340" height="270"></img>


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});