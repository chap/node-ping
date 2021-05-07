const https = require('https');
const url = process.env.URL || 'https://1.1.1.1/'
const delay = process.env.DELAY || 10000

setTimeout(() => {
    https.get(url, res => {
        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
        console.log('Status Code:', res.statusCode);
        console.log('Date in Response header:', headerDate);
        }).on('error', err => {
        console.log('Error: ', err.message);
    });
}, delay);