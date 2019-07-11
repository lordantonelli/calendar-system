const proxy = [
  {
    context: '/api',
    target: 'http://calendar:8888',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;