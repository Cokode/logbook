import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
	res.cookie('signed cookie', 'moi moin', {signed: true});
  res.render('home', { layout: 'home-layout'});
});

export default router;