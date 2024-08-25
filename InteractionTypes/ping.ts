import { IncomingMessage, ServerResponse } from "http";

const pingInteraction = (req : IncomingMessage, res : ServerResponse) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Authorization': `Bot ${process.env.auth}`
    })
    res.write(JSON.stringify({
        type: 1
    }))
    res.end();
}

export default pingInteraction;