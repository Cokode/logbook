import express from 'express';
const router = express.Router();

router.get('/test', function(req, res) {
  res.render('test2', {layout:false});
});


export default router;