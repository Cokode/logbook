import express from 'express';
const router = express.Router();

router.get('/user-profile', (req, res) => {

  if (!req.session.isLoggedin) {
    res.redirect(303, '/');
  }

  if(!req.session.editProfile) {
    console.log('editProfile is set to false');
    res.locals.editProfile = false;
  } else {
    res.locals.editProfile = true;
    console.log('editProfile is set to true');
    delete req.session.editProfile;
    console.log('editProfile is deleted from session.');
  }

  console.log(res.locals.editProfile);

  const user = req.session.user;
  res.render('profile', {layout: 'main', user});
});

export default router;
