import express from 'express';
const router = express.Router();

router.get('/forgot-password', (req, res) => {
  res.render('forgot-password', { layout: 'home-layout'});
});

export default router;
