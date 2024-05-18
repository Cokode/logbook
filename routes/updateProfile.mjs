import express from 'express';
const router = express.Router();
import { url } from '../component/backendCredentials/backendUrl.mjs';
import postUpdatedUser from '../routes/submit-update.mjs'; // Correctly import the function

router.post('/update-profile', async (req, res) => {

  if (!req.session.isLoggedin) {
    return res.redirect(303, '/');
  }

  try {
    const response = await postUpdatedUser(url, req.body); // Make sure to await the async function

    const result = await response.json();
    console.log(result);
  
    if (result) {
      req.session.user = result;
      req.session.userLogs = result.logs;

      res.locals.logs = result.logs;
      return res.redirect(303, '/user-profile');
    }

    console.log("I am here before redirecting...");
    res.redirect(303, '/edit-profile');
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
