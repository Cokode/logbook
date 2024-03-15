import express from 'express';
const router = express.Router();

router.get('/user-profile', (req, res) => {

  if (!req.session.isLoggedin) {
    res.redirect(303, '/');
  }
  
  res.render('profile', {layout: 'main'});
});

export default router;
