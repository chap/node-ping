const https = require('https');
const url = process.env.URL || 'https://1.1.1.1/'
const delay = process.env.DELAY || 10000

setInterval(() => {
    https.get(url, res => {
        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
        console.log(`{request:"${res.headers['x-request-id']}" status:${res.statusCode}}`);
        }).on('error', err => {
        console.log('Error: ', err.message);
    });
}, delay);