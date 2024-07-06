import interaction from "./interactions"

const scoreboard = new interaction();

interactions.register({name:"scoreboard", type:1 }, (body) => {
    console.log("new scoreboard created!");
})

export default { scoreboard }