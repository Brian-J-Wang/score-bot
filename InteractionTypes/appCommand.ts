import { IncomingMessage, ServerResponse } from "http";

const appCommand = (body, res : ServerResponse) => {
    console.log(body.data);

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Authorization': `Bot ${process.env.auth}`
    });

    res.write(JSON.stringify({
        type: 4,
        data: {
            content: `Scoreboard has been created`
        }
    }));

    res.end();
}

export default appCommand;