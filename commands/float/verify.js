const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');

const execute = async (interaction, options) => {
    if (interaction.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
        let role = interaction.guild.roles.cache.find(role => role === options.getRole('role'));
        if (!role) {
            await interaction.reply({ ephemeral: true, content: 'This role does not exist.' }).catch(e => console.log(e));
            return;
        }

        let eventId = options.getNumber('eventid');
        verifyFloatButton(interaction, eventId, role.id);
    }
}

const verifyFloatButton = async (interaction, eventId, roleId) => {
    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId(`verifyFloat-${eventId}-${roleId}`)
                .setLabel('Verify')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setURL('https://id.ecdao.org/')
                .setLabel('Manage EmeraldID')
                .setStyle('LINK')
        );

    const embed = new MessageEmbed()
        .setColor('#5bc595')
        .setTitle(`Verify you own a FLOAT from Event #${eventId}`)
        .setAuthor('Emerald City', 'https://i.imgur.com/Xlfqj5g.png', 'https://discord.com/invite/xtqqXCKW9B')
        .setDescription('Click the `Verify` button below to get the ' + `<@&${roleId}>` + ' role with your EmeraldID. \n if don\'t have please get here https://floats.city/soulmade.fn/event/' + `${eventId}`)
        .setThumbnail('https://i.imgur.com/HWXhRXt.png');

    await interaction.reply({ embeds: [embed], components: [row] }).catch(e => console.log(e));
}

module.exports = {
    name: 'float-verify',
    description: 'setup a role verification with emeraldid',
    execute
}