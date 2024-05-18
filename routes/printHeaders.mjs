import express from 'express';
const router = express.Router();

router.get('/headers', (req, res) => {
	res.set('Content-type', 'text/plain');
	res.cookie('exposed', 'no show');

	console.log(req.signedCookies);
	var s = '';

	for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
	res.send(s);
});

export default router;