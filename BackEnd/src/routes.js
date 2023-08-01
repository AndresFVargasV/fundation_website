const express = require('express');
const router = express.Router();
const Login = require('./functions/login');

router.get('/', (req, res) => {
    res.json({
        "Res": "API is working"
    });
});

router.post('/login', async (req, res) => {
    const {Email, Password} = req.body;
    try {
        const result = await Login(Email, Password);
        if (result) {
            res.json({
                "Res": "Login successful"
            });
        } else if (result === null) {
            res.json({
                "Res": "Login failed"
            });
        }
    } catch (err) {
        console.error('Error al verificar el inicio de sesión:', err.message);
        res.json({
            "Res": "Login failed"
        });
    }
});


module.exports = router;