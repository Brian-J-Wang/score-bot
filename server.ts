import dotenv from 'dotenv';
import { createServer } from 'http';
import getRequestBody from './utils/utils.js';
import securityHeader from './interactions/validation.js';
import handleInteractions from './Routes/Interaction.ts';

dotenv.config();
const { port, hostname } = process.env;

const server = createServer(async (req, res) => {
    const { headers, method } = req;

    //body is presented in hexadecimal
    var body = await getRequestBody(req);

    {
        const signature = headers['x-signature-ed25519'];
        const timestamp = headers['x-signature-timestamp'];
        const isVerified = securityHeader(signature, timestamp, body);

        if (!isVerified) {
            res.statusCode = 401;
            res.end('invalid request signature');
            return;
        }
    }

    if (req.url === '/' && method === 'POST') {
        handleInteractions(body, req, res);
    }
// @ts-ignore
}).listen(port, hostname, () => {
    console.log(`server http://${hostname}:${port} started`);
});

