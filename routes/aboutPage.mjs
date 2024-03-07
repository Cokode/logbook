import express from 'express';
const router = express.Router();

router.get('/about', (req, res) => {
	res.render('about', { layout: 'home-layout', 
	pageTestScript: '/qa/tests-about.js', name : 'Collins'});
});

export default router;