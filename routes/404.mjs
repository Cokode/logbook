import express from 'express';
const router = express.Router();
import getFortune from '../lib/fortune.mjs';

router.use(function(req, res, next) {
	res.status(404);
	
	res.render('404', {layout: 'home-layout', fortune : getFortune()});
});

export default router;