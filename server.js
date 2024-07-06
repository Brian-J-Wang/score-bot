require('dotenv').config();

const http = require('http');
const validate = require('./interactions/validation.js');
const utils = require('./utils/utils.js')
const interaction = require('./interactions/validation.js');

const server = http.createServer(async (req, res) => {
    const { headers, method} = req;
    var body = await utils.getRequestBody(req);

    {
        const signature = headers['x-signature-ed25519'];
        const timestamp = headers['x-signature-timestamp'];
        const isVerified = validate.securityHeader(signature, timestamp, body);

        if (!isVerified) {
            res.statusCode = 401;
            res.end('invalid request signature');
            return;
        } else {
            console.log('request validated');
        }
    }

    body = JSON.parse(body);

    //Ping request
    if (body.type == 1 && method === 'POST') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${process.env.auth}`
        })
        res.write(JSON.stringify({
            type: 1
        }))
        res.end();
        return;
    }

    console.log(body);

    if (body.type == 2 && method === 'POST') {

    }

}).listen(process.env.port, process.env.hostname, () => {
    console.log(`server http://${process.env.hostname}:${process.env.port} started`);
});

