import express from 'express';
import { create } from 'express-handlebars';
import bodyParser from 'body-parser';
import getFortune from './lib/fortune.mjs';
import { Logs } from './component/Logs.mjs';
import { hello } from './component/esmodule/Hello.mjs';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { credentials } from './credentials.mjs';
import { postUser } from './component/backendCredentials/backendPostUser.mjs';
import { url } from './component/backendCredentials/backendUrl.mjs';
import connect from 'connect';
import { getUserName } from './component/backendCredentials/getUserName.mjs';
import { verifyLogin} from './component/backendCredentials/verifyLogin.mjs';
import { populateDetails, userDetails } from './component/backendCredentials/schema.mjs';

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

app.use(cookieParser(credentials.cookieScrete));

app.use(session({
	secret: 'your-secret-key',
	resave: false,
	saveUninitialized: false
}));

app.use(function(req, res, next) {
	res.locals.flash = req.session.flash;
	delete req.session.flash;
	next();
});

app.get('/headers', (req, res) => {
	res.set('Content-type', 'text/plain');
	res.cookie('exposed', 'no show');

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
}
);
 
app.get('/es', (req, res) => {
	hello();
	res.set('content-type', 'text/plain');
	res.send('Hello welcome');
});

app.get('/', (req, res) => {
	res.cookie('signed cookie', 'moi moin', {signed: true});
  res.render('home', { layout: 'home-layout'});
});

app.get('/forgot-password', (req, res) => {
  res.render('forgot-password', { layout: 'main'});
});

app.get('/sign-up', (req, res) => {
	res.render('sign-up', { layout: 'home-layout'});
});

app.post('/process-login', async (req, res) => { 
	let loginDetails = req.body;

	try {
    const response = await fetch((url+'verifyLogin'), {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    });

    const result = await response.json();
		const info = populateDetails(result);
		
		res.locals.userDetails = info;

		console.log(info);
		console.log(result);

    if(result !== null) {
      req.session.formSubmitted = true;
			res.redirect(303, '/home');

    } else {
      console.log("failure... result is null");
			res.render('/404', {layout: null});
    }

  } catch (error) {
    console.error("Error:", error);
  }
});

app.get('/home', (req, res) => {
	// Check if the form was successfully submitted
	if (!req.session.formSubmitted) {
			console.log('redirected to home not logged in');
			res.redirect('/');
		} else {
				// Render the login page
				
			console.log("check here ");

			console.log(res.locals.userDetails);
				res.render('login');
		}
});
 
app.post('/sign-up-process', async (req, res) => {
	const info = req.body;
	console.log(JSON.stringify(info));

	try {
		const response = await postUser(url, info);

		if(!(response.ok)) {
			console.log('User Already exist');
			res.render('userExist');
		} else {
			res.redirect(303, '/thank-you');
		}

	} catch (error) {
			console.error('Error creating user:', error);
	}

});


app.get('/about', (req, res) => {
	res.render('about', { layout: 'home-layout', 
	pageTestScript: '/qa/tests-about.js', name : 'Collins'});
});


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