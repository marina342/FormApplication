/**
 * Created by pidoi on 4/11/2018.
 */
const http= require('http');
const url= require('url');
const fs= require('fs');
const path = require('path');
const handlingRequest=require('./handlingRequest');
let app= require('./renderHTML');

http.createServer((request, response)=>{
    if (!request.url) request.url = "/";
    let route = url.parse(request.url).pathname;
    let extname = String(path.extname(route)).toLowerCase();
    switch (route){
        case '/': app.renderHTML('../src/index.html', response); break;
        case '/styles.css': app.writeFiles('../src/styles.css',extname, response); break;
        case '/build.js': app.writeFiles('../build.js',extname, response); break;
        case '/images/logo.png': app.writeFiles('../src/images/logo.png', extname, response); break;
        case '/api/Users':handlingRequest.onRequest(request, response); break;
        default : response.end();
    }
}). listen(3000);