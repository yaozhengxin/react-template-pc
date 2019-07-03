// https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development

// const proxy = require('http-proxy-middleware');
// module.exports = function (app) {
//   app.use(
//     proxy('/',
//       {
//         target: 'https://uat.boseclub.com', // ！！！代理地址
//         pathRewrite: { // 反向代理可修改
//           '^/knowledge-center': '/knowledge-center/'
//         },
//         ws: false, // 是否代理websockets
//         changeOrigin: true // 将主机标头的原点更改为目标URL
//       }
//     ));
// };