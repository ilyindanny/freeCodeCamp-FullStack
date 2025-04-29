const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url}`);

    // Указываем путь к файлу
    let filePath = '.' + req.url;
    if (filePath == './') {
        filePath = './index.html'; // Если запрашивается корень, показываем index.html
    }

    // Определяем расширение файла
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.ttf': 'font/ttf',
        '.js': 'application/javascript'
    };

    // Устанавливаем тип контента
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Читаем файл и отправляем его клиенту
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                // Если файл не найден, возвращаем ошибку 404
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404: File Not Found');
            } else {
                // Если другая ошибка, 500
                res.writeHead(500);
                res.end('500: Server Error');
            }
        } else {
            // Если файл найден, отдаем его клиенту
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Запускаем сервер на порту 80
server.listen(80, () => {
    console.log('Server running at http://localhost:80/');
});

// Этот блок нужен для отображения веб-приложения в Node.js Lab
setTimeout(function(){
    if(process.env.NODELAB === "true"){
        webAppReady();
    }
}, 1000);