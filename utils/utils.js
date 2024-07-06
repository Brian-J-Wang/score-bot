require('dotenv').config();

exports.getRequestBody = (req) => {
    return new Promise((resolve) => {
        var body = []
        req.on('data', chunk => {
            body.push(chunk);
        })
        req.on('end', () => {
            body = Buffer.concat(body).toString();
            resolve(body);
        })
    })
}