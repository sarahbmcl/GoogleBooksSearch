const router = require("express").Router();
const googleController = require('../../controllers/google');

// Matches "/api/google"
router.route('/').get(googleController.findAll);

module.exports = router;