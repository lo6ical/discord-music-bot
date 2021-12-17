module.exports = {
    name: 'kick',
    description: 'This command kicks a member',
    execute(message, args, client) {
        if(message.member.roles.cache.has('920766622610911252')) {
            const member = message.mentions.users.first();
            if(member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send('User has been kicked');
            } else {
                message.channel.send("You can't ban that member");
            }
        } else {
            message.channel.send('This command is only for the mods!');
        }
    }
}