export default class interaction {
    constructor() {
        this.interactions = [];
    }

    //differentiates interactions. getBody returns a response body from the data provided in the 
    register({name, type}, action) {
        this.interactions.push({
            name: name,
            type: type,
            getBody: action
        });
    }

    query(body) {
        const name = body.data.name;
        const type = body.data.type;

        const interaction = this.interactions.find((interaction) => {
            return interaction.name === name && interaction.type === type;
        })

        //interactions will be undefined if no such interaction name and type is found in interactions
        if (interaction == undefined) {
            console.error(`no such intraction with name: ${name} and type: ${type} found`);
            return undefined;
        }

        return interaction.getBody(body);
    }
}