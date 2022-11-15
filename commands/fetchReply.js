// followUp reply to send more messages. 15 min discord wait timer

const { SlashCommandBuilder } = require("discord.js");
const wait = require('node:timers/promises').setTimeout;


module.exports = {
    data: 
    new SlashCommandBuilder()
        .setName('fetchreply')
        .setDescription('Sends two messages'),

        async execute(interaction){
            if (!interaction.isChatInputCommand()) return;

            if (interaction.commandName === 'fetchreply'){
                await interaction.reply('first message');
                const message = await interaction.fetchReply();
                console.log(message.content)
            }
        },
};

