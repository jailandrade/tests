'use strict';

const Hapi = require('hapi');
const Good = require('good');

/**
 * Create a new instance server from Hapi
 */
const server = new Hapi.Server();

/**
 * Define in which port the connections start
 */
server.connection({port: 3124});

/**
 * Define the route for the home route
 */
server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply){
	reply('Hello world');
    }
});

/**
 * Define the route for get a x page
 */
server.route({
    method: 'GET',
    path: '/{name}',
    handler: function(request, reply){
	reply('Hello ' + encodeURIComponent(request.params.name));
    }
});

server.register(require('inert'), (err) => {
    if (err) {
	throw err; 
    }
    
    server.route({
	method: 'GET',
	path: '/hello',
	handler: function(reqest, reply){
	    reply.file('./public/hello.html');
	}
    });
});

/**
 * Start the server
 */
server.register({
    register: Good,
    options: {
	reporters: {
	    console: [{
		module: 'good-squeeze',
		name: 'Squeeze',
		args: [{
		    response: '*',
		    log: '*'
		}]
	    }, {
		module: 'good-console' 
	    }, 'stdout']	
	} 
    }
}, (err) => {

    if (err) {
	throw err; 
    }

    server.start((err) => {
	server.log('info', 'Server running at ' + server.info.url);
    });
});
