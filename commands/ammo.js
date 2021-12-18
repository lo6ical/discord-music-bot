const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'ammo',
    description: 'This command displays eft ammo',
    execute(message, args, client, Discord) {
        const ammo = {
            shotgun: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A37:M65',
            ak: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A120:M158',
            m4: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A124:M158',
            pistol: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A66:M99',
            asval: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A115:M119',
            tkm: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A120:M123',
            mosin: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A154:M182',
            a12gauge: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A38:S42',
            a20gauge: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A54:A61',
            a23x75: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A62:A65',
            a9x18: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A66:A79',
            a762x25: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A80:A86',
            a9x19: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A87:A94',
            a45: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A95:A99',
            a9x21: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A100:A103',
            a57x28: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A104:A110',
            a46x30: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A111:A114',
            a9x39: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A115:A119',
            a366: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A120:A123',
            a545x39: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A124:A136',
            a556x45: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A137:A147',
            a762x39: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A148:A153',
            a300blk: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A154:A158',
            a762x51: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A159:A165',
            a762x54r: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A166:A171',
            a127x55: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A172:A174',
            a338: 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005&range=A175:A178',
        };
        const ammoNew = args[0].split('.').join("");
        var Channel = message.channel.name;

        if (Channel != 'tarkov') {
            message.channel.send('Cannot use command here, ' + "<@" + message.author.id +">");
        } else {
            if (ammo.hasOwnProperty('a' + ammoNew)) {
                if(!args[0]) return message.reply('please enter the ammo type');
                message.channel.send(ammo['a' + ammoNew]);
            } else {
                message.channel.send('please enter a correct ammo type');
                console.log('a' + ammoNew);
            }
        }  
    }
}