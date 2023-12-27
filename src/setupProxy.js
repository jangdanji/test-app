const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // 이 경로로 시작하는 요청을 가로챕니다.
    createProxyMiddleware({
      target: 'https://api.cellpion.com', // 프록시 대상 서버 주소
      changeOrigin: true,
    })
  );
};


// https://api.cellpion.com/api/benefit/benefitRemittance