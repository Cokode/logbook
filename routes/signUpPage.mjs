import express from 'express';
const router = express.Router();

router.get('/sign-up', (req, res) => {
	res.render('sign-up', { layout: 'home-layout'});
});

export default router;
