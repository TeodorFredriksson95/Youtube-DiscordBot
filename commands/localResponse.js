
const { SlashCommandBuilder } = require("discord.js");
const wait = require('node:timers/promises').setTimeout;


module.exports = {
    data: 
    new SlashCommandBuilder()
        .setName('localresponse')
        .setDescription('Sends message based on region or default'),

        async execute(interaction){
            if (!interaction.isChatInputCommand()) return;

            if (interaction.commandName === 'localresponse'){
                const locales = {
                    nl: 'HOTJEFORDOME',
                    se: 'Hallåååå där'
                }

                await interaction.reply(locales[interaction.locales] ?? 'Hello! (default)');
          }
        },
};

