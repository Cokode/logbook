import express from 'express';
const router = express.Router();
import { hello } from "../component/esmodule/Hello.mjs";

router.get('/es', (req, res) => {
	hello();
	res.set('content-type', 'text/plain');
	res.send('Hello welcome');
});