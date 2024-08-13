const express = require('express');

const { isLoggedIn } = require('../middlewares');
const { follow } = require('../controllers/user');

const router = express.Router();

// POST /user/:id/follow
router.post('/:id/follow', isLoggedIn, follow);

// POST /user/:id/unFollow
// router.post('/:id/unFollow', isLoggedIn, unFollow);

module.exports = router;
