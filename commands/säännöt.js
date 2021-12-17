module.exports = {
    name: 'säännöt',
    description: 'this is a ping command',
    execute(message, args, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6E2626')
        .setTitle('Säännöt')
        .setURL('https://www.google.com')
        .setDescription('Säännöt koskevat kaikkia Vitua Gamingin jäseniä.')
        .addFields(
            {name: 'Sääntö 1', value: 'Älä pakota pelaamaan'},
            {name: 'Sääntö 2', value: 'Jos tarpeeksi vittuilee, saa tappaa!'}
        )
        .setImage('https://i.imgur.com/rFXKYOq.jpeg')
        .setFooter('kirottu kisse');

        message.channel.send(newEmbed);
    }

    
}