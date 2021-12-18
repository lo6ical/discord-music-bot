const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'map',
    description: 'This command displays eft maps',
    execute(message, args, client, Discord) {
        const maps = {
            interchange: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e5/InterchangeMap_Updated_4.24.2020.png/revision/latest?cb=20210320055357',
            customs: 'https://external-preview.redd.it/sIkxyt6NFgCYKTMYlOAq5RMAuFDVCM9mGWZJwIxeD7U.jpg?auto=webp&s=69353f5977f6c2e53b2b5305e4762fc5db25ed83',
            reserve: 'https://external-preview.redd.it/2T7Rt1gqZ04GsHkH09ocK_a_y82wpWu1zjLJ_wSYeq8.png?auto=webp&s=5b364daceda82bed0d223a1ed9c39c5b9e798686',
            woods: 'https://i.redd.it/58iiphfq3z861.png',
            lab: 'https://i.redd.it/k80eqxqovrx41.png',
            factory: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/cd/Factory_3D_b_Johnny_Tushonka.jpg/revision/latest/scale-to-width-down/800?cb=20210704215141',
            shoreline: 'https://preview.redd.it/qlwzubo6y0c21.jpg?auto=webp&s=b24784ddbc83a95f00841342b5097cf46d3aee52',
            lighthouse: 'https://i.imgur.com/FoUef8a.jpeg'
        };
        if (maps.hasOwnProperty(args[0])) {
            const newEmbed = new MessageEmbed()
            .setTitle(args[0])
            .setURL(`https://mapgenie.io/tarkov/maps/${args[0]}`)
            .setImage(maps[args[0]]);

            if(!args[0]) return message.reply('please enter the map name');
            message.channel.send(newEmbed);
        } else {
            message.channel.send('map not found');
        }
        
    }
}