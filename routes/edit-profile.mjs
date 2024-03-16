import express from 'express';
const router = express.Router();

router.post('/set-edit-profile', (req, res) => {

  if(req.session.isLoggedin){
    req.session.editProfile = req.body.editProfile;
    res.sendStatus(200);
  } else {
    res.redirect(303, '/');
  }

});

export default router;