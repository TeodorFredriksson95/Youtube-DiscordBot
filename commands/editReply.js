// Waits 2 seconds then edits the initial reply
const { SlashCommandBuilder } = require("discord.js");
const wait = require('node:timers/promises').setTimeout;


module.exports = {
    data: 
    new SlashCommandBuilder()
        .setName('editreplytest')
        .setDescription('After delay, replies with an edited message !'),

        async execute(interaction){
            if (!interaction.isChatInputCommand()) return;

            if (interaction.commandName === 'editreplytest'){
                await interaction.reply('Initial message');
                await wait(2000);
                await interaction.editReply('Initial message gets edited!');
            }
        },
};

