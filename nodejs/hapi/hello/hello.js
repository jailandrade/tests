'use strict'

const Hapi = require('Hapi');

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: function(request, reply){
        return reply('Hello world');
    }
});

server.start((err) => {
    if (err){
        throw err;
    }

    console.log('Server running at: ', server.info.uri)
})