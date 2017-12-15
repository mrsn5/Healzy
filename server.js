var express = require('express');

/*var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';*/

var main = require('./Backend/main');
main.startServer(5050);



