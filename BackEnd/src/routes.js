const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "Res": "API is working"
    });
});


module.exports = router;