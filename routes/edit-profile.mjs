import express from 'express';
const router = express.Router();

router.get('/edit-profile', (req, res) => {
  const user = req.session.user;

  if(!req.session.isLoggedin){
    res.redirect(303, '/');
  }

  res.render('edit-profile', {layout: 'main', user});
});

export default router;