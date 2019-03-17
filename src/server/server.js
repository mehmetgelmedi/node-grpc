const grpc = require('grpc'),
    path = require('path'),
    handlers = require('./handlers');
const news_proto = grpc.load({ root: path.join(__dirname, '/../../protos/'), file: 'news.proto' });

const server = new grpc.Server();
server.addService(news_proto.news.NewsService.service, {
    list: handlers.list,
    selectById: handlers.selectById,
    add: handlers.add,
    remove: handlers.remove,
    update: handlers.update
});

const server_credentials = grpc.ServerCredentials.createInsecure();
server.bind('0.0.0.0:3000', server_credentials);

module.exports = server;