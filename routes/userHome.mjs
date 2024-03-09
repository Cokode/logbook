import express from 'express';
const router = express.Router();

router.get('/home', (req, res) => {
	let user = req.session.user;

	if (!req.session.isLoggedin) {
			res.redirect('/');
		} else {

			// console.log(req.session);
      console.log(req.session.userLogs);
      console.log("printed from userHome.js");
			res.render('login', {user, layout: 'main',  title: 'home'});
		}
});

export default router;