require('dotenv').config();

const baseURL = `https://discord.com/api/v10/applications/${process.env.app_id}/commands`;

exports.register = (command) => {
    return fetch(baseURL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bot ${process.env.auth}`
        },
        body: JSON.stringify(command)
    })
    .then(res => {
        if (res.status == '200') {
            console.log(`command overridden`);
        } else if (res.status == '201') {
            console.log(`new command registered`);
        } else {
            console.log(`error registering command, status code: ${res.status}`);
        }

        return res.json();
    });
}

exports.getCommands = () => {
    return fetch(baseURL, {
        method: 'GET',
        headers: {
            "Authorization": `Bot ${process.env.auth}`
        }
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
    })
    .then(json => {
        console.log(json);
    })
}