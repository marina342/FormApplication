/**
 * Created by pidoi on 4/11/2018.
 */
let addToCollection= require('./DataBase');
let url = require('url');
module.exports= {
    onRequest: function (request, response) {
        if (request.method == 'POST') {
            var queryData = "";
            console.log("request");
            request.on('data', function (data) {
                queryData += data;
                if (queryData.length > 1e6) {
                    queryData = "";
                    response.writeHead(413, {'Content-Type': 'text/plain'}).end();
                    request.connection.destroy();
                }
            });

            request.on('end', function () {
                let callbackSuccess= function () {
                    response.writeHead(200, {"Content-Type": "application/json"});
                    let data ={success:1};
                    data=JSON.stringify(data);
                    response.write(data);
                    response.end();
                };
                let callbackFailed=function () {
                    response.writeHead(500, {"Content-Type": "application/json"});
                    let data ={failed:1};
                    data=JSON.stringify(data);
                    response.write(data);
                    response.end();
                };
                request.post = JSON.parse(queryData);
                addToCollection.createDB(request, callbackSuccess, callbackFailed);
            });
        }
        else if (request.method == 'GET') {
            let callbackSuccess= function(data) {
                response.writeHead(200, {"Content-Type": "application/json"});
                data=JSON.stringify(data);
                response.write(data);
                response.end();
            };
            let callbackFailed=function () {
                response.writeHead(500, {"Content-Type": "application/json"});
                let data ={failed:1};
                data=JSON.stringify(data);
                response.write(data);
                response.end();
            };
            let url_parts = url.parse(request.url, true);
            let query = url_parts.query;
            let day = query.day.toString();
            let hour = query.hour.toString()+":00";
            addToCollection.findQuery(day, hour, callbackSuccess, callbackFailed);
        }
        else {
                response.writeHead(405, {'Content-Type': 'text/plain'});
                response.end();
            }
    }
};