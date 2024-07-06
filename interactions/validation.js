//handles validating security request headers
require('dotenv').config();

const nacl = require('tweetnacl');
const util = require('../utils/utils.js');

exports.securityHeader = (signature, timestamp, body) => {
    const isVerified = nacl.sign.detached.verify(
        Buffer.from(timestamp + body),
        Buffer.from(signature, "hex"),
        Buffer.from(process.env.public_key, "hex")
    );

    return isVerified ? true : false;
}