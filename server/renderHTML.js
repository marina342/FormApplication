/**
 * Created by pidoi on 4/11/2018.
 */
const fs= require('fs');
module.exports={
    renderHTML:function(path, response){
    fs.readFile(path, null, (error, data) => {
        if (error) {
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write("File not found");
        }
        else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
        }
        response.end();
    });
},
    writeFiles:function (path, extname, response) {
        fs.readFile(path, null, (error, data) => {
            if (error) {
                response.writeHead(404, {'Content-Type': 'text/plain'});
                response.write("File not found");
            }
            else {
                response.writeHead(200, {'Content-Type': mimeTypes[extname].toString()});
                response.write(data);
            }
            response.end();
        });
    }
};
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.svg': 'application/image/svg+xml'
};