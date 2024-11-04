require('dotenv').config();

const express = require('express');

const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/users', createProxyMiddleware({ target: 'http://localhost:4001', changeOrigin: true }));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
