import express from 'express';
const router = express.Router();

router.use(function(err, req, res, next) {

	res.status(505); 
	res.render('505', {layout: 'home-layout'});
});

export default router;