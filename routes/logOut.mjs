import express from 'express';
const router = express.Router();

router.get('/logout', (req, res) => {
  console.log(req.session.user);
  console.log('Session before cleared => ');
  try {
    req.session.destroy();
    res.locals = null;
    console.log(req.session);
    res.redirect(303, '/');
  } catch(error) {
    console.log(error);
  }
  
});

export default router;