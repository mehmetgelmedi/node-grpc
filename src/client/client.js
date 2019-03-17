const grpc = require('grpc'),
    path = require('path');
const NewsService = grpc.load({ root: path.join(__dirname, '/../../protos/'), file: 'news.proto' }).news.NewsService;
const client = new NewsService('localhost:3000',
    grpc.credentials.createInsecure());

module.exports = client;