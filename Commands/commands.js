import { register, getCommands } from './register.js';

register({
    "name": "scoreboard",
    "type": 1,
    "description": "interface for working with scoreboards",
    "options": [
        {
            "name": "name",
            "description": "scoreboard name",
            "type": 3,
            "max_length": 30
        }
    ]
})

register({
    "name": "ping",
    "type": 1,
    "description": "test command for interactions"
})

getCommands();