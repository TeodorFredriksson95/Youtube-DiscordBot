// Tells Discord that the interaction was successfully recieved 
// and allows your bot to handle a process which might take longer than
// the default 3 second time limit. (Can take up to 15 min with defer reply)
const { SlashCommandBuilder } = require("discord.js");
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: 
    new SlashCommandBuilder()
        .setName('deferreply')
        .setDescription('Gives the bot time to think longer than Discords default!'),

        async execute(interaction){
            if (!interaction.isChatInputCommand()) return;

            if (interaction.commandName === 'deferreply'){
                await interaction.deferReply();
                await wait(4000);
                await interaction.editReply('A deferred reply!');
            }
        },
};
