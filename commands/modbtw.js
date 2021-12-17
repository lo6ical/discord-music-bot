module.exports = {
    name: 'mod',
    description: 'this is a mod command',
    execute(message, args, client) {
        if(message.member.roles.cache.has('920766622610911252')) {
            message.channel.send('mod btw!');
        } else {
            message.channel.send('This command is only for the mods!');
        }
    }
}