const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'hideout',
    description: 'This command displays eft maps',
    execute(message, args, client, Discord) {
            const newEmbed = new MessageEmbed()
            .setTitle('Hideout items')
            .setURL(`https://escapefromtarkov.fandom.com/wiki/Hideout`)
            .setImage('https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/39/Hideout-Requirements-Items-to-Keep.jpg/revision/latest/scale-to-width-down/1000?cb=20211002124130');

            message.channel.send(newEmbed);
    }
}