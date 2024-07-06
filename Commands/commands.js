require('dotenv').config();

const commands = require('./register.js');

commands.register({
    "name": "scoreboard",
    "type": 1,
    "description": "interface for working with scoreboards"
})

commands.register({
    "name": "ping",
    "type": 1,
    "description": "test command for interactions"
})

commands.getCommands();