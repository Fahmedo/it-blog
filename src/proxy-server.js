const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Replace 'https://blog-api-g8u6.onrender.com' with your API's base URL
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://blog-api-g8u6.onrender.com',
    changeOrigin: true,
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
