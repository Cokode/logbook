import express from 'express';
const router = express.Router();

router.get('/twitter', (req, res) => {
	res.render('twitter-sign-up', {
		layout: 'home-layout', 
		csrf: 'CSRF token goes here'});
});


export default router;