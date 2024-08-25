//handles validating security request headers
import dotenv from 'dotenv';
dotenv.config();
import nacl from 'tweetnacl';

const securityHeader = (signature, timestamp, body) => {
    const isVerified = nacl.sign.detached.verify(
        Buffer.from(timestamp + body),
        Buffer.from(signature, "hex"),
        Buffer.from(process.env.public_key, "hex")
    );

    return isVerified ? true : false;
}

export default securityHeader;