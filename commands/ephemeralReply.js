//Ephemeral means the response is only visible to the key user

const { SlashCommandBuilder } = require("discord.js");


module.exports = {
    data: 
    new SlashCommandBuilder()
        .setName('ephemeral')
        .setDescription('Replies with an ephemeral message!'),

        async execute(interaction){
            await interaction.reply({ content: 'This message is only shown to you!', ephemeral: true});
        },
};

