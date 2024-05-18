import express from 'express';
const router = express.Router();

router.get('/thank-you', (req, res) => {
	res.render('thankyou', {layout: false});
});
 