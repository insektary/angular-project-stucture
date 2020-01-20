// REWRITE EXAMPLE
const express = require('express');
const jsonServer = require('json-server');
const router = express.Router();

router.use(jsonServer.rewriter({
	'/api/auth/login': '/auth/login',
	'/api/auth/userInfo': '/auth/userInfo'
}));

module.exports = router;
