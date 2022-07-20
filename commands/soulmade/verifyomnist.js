const {checkSoulMadeComplete} = require('../../flow/scripts/checkSoulMadeComplete');

const execute = async(interaction, options) => {
    await interaction.deferReply({ ephemeral: false });
    let address = options.getString('account')
    let result = await checkSoulMadeComplete(address,"Omnist");
    if (result.error) {
        await interaction.followUp({ ephemeral: false, content: "Something Wrong, Please Check The Parameter" }).catch(e => console.log(e));
        return 
    }
    postVerify(interaction, result,address)
}

const postVerify = async(interaction, result,address) => {
    true_count = 0
    for (const key of Object.keys(result)) {
        if (result[key] == true) [
            true_count++
        ]
      }

    const embed = {
        color: '#5bc595',
        title: 'SoulMade',
        url: `https://i.imgur.com/Xlfqj5g.png`,
        description: `Verify the number of complete SoulMade`,
        thumbnail: {
            url: `https://i.imgur.com/Xlfqj5g.png`,
        },
        fields: [
            {
                name: 'Address',
                value: address,
                inline: true
            },
            {
                name: "Verify Count",
                value: String(true_count),
                inline: true
            }
        ]
    }

    await interaction.editReply({ embeds: [embed] }).catch(e => console.log(e));

}

module.exports = {
    name: 'soulmade-verifyomnist',
    description: 'verifies if a user has a nft from a certain contract',
    execute,
}