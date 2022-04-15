const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const path = require('path');

const options = {
    key: fs.readFileSync('../ssl/key.pem'),
    cert: fs.readFileSync('../ssl/cert.pem')
};

https.createServer(options, app).listen(3001, () =>
    console.log('HTTPS listening on 3001...')
);

// 静的ファイルのルーティング
app.use(express.static(
    path.join(__dirname, 'public')
    )
);
