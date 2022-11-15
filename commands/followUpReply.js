// followUp reply to send more messages. 15 min discord wait timer

const { SlashCommandBuilder } = require("discord.js");
const wait = require('node:timers/promises').setTimeout;


module.exports = {
    data: 
    new SlashCommandBuilder()
        .setName('followup')
        .setDescription('Sends two messages'),

        async execute(interaction){
            if (!interaction.isChatInputCommand()) return;

            if (interaction.commandName === 'followup'){
                await interaction.reply('first message');
                await wait(2000);
                await interaction.followUp('second message');            }
        },
};

