const Discord = require('discord.js');

const client = new Discord.Client();


const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})


client.login('OTIwNzU1NTQ5NDAwODU4Njg0.Ybo-bQ.RK-aHhFekXhxOj7PMcTXyb4z5TE');