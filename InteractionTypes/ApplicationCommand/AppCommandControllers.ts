import InteractionRouter from "../../Routes/interactionsRouter";

const router = new InteractionRouter();

router.addController({
    name: "scoreboard",
    response: function(body, res) {
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
})

router.addController({
    name: "[any] join",
    response: function(body, res) {
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
})