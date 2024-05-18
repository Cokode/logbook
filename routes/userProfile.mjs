import express from 'express';
const router = express.Router();

router.get('/user-profile', (req, res) => {

  if (!req.session.isLoggedin) {
    res.redirect(303, '/');
  }

  const user = req.session.user;
  res.render('profile', {layout: 'main', user});
});

export default router;
