const express = require('express');

const router = new express.Router();

// Routing

const apiVersion = 'v1';

router.post(`/register`, (req, res) => {
    res.json({
        success: true,
        message: "Dummy Registration API"
    })
});

router.post(`/login`, (req, res) => {
    res.json({
        success: true,
        message: "Dummy Login API"
    })
});

router.patch(`/edit`, (req, res) => {
    res.json({
        success: true
    })
});


module.exports = router;