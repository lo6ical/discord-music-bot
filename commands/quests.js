const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'quests',
    description: 'This command displays eft maps',
    execute(message, args, client, Discord) {
            const newEmbed = new MessageEmbed()
            .setTitle('Quests')
            .setURL(`https://escapefromtarkov.fandom.com/wiki/Quests`)
            .setImage('https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/19/QuestItemRequirements.png/revision/latest/scale-to-width-down/1000?cb=20210629064300');

            message.channel.send(newEmbed);
    }
}