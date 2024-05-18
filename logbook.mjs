import express from 'express';
import { create } from 'express-handlebars';
import bodyParser from 'body-parser';
import { Logs } from './component/Logs.mjs';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { credentials } from './credentials.mjs';
// import connect from 'connect';
import userHomePage from './routes/userHome.mjs'
import signUpProcess from './routes/signUpRoute.mjs'
import postLogRoute from './routes/post_log.mjs';
import login from './routes/login.mjs';
import logOut from './routes/logOut.mjs';
import testing from './routes/testing.mjs';
import showlogs from './routes/showlogs.mjs';
import aboutPage from './routes/aboutPage.mjs';
import toPrintHeaders from './routes/printHeaders.mjs';
import forgotPassword from './routes/forgotPass.mjs';
import signUpThankYou from './routes/signUpPage.mjs';
import profile from './routes/userProfile.mjs';
import editProfile from './routes/edit-profile.mjs';
import updateProfile from './routes/updateProfile.mjs';
import siteHome from './routes/siteHome.mjs';
import error404 from './routes/404.mjs';
import error505 from './routes/404.mjs';

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
	saveUninitialized: false,
	cookie: {secure: false, maxAge: 6000000} 
}));

app.use(function(req, res, next) {
	res.locals.flash = req.session.flash;
	delete req.session.flash;
	next();
});

app.use(postLogRoute);

app.use(toPrintHeaders);

app.use(signUpThankYou);

app.use(siteHome);

app.use(forgotPassword);
app.use(updateProfile) // here 
app.use(login);
app.use(logOut);
app.use(testing);
app.use(showlogs);

app.use(userHomePage);
 
app.use(signUpProcess);
app.use(profile);
app.use(editProfile);

app.use(aboutPage);

app.use(error404);

app.use(error505);






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