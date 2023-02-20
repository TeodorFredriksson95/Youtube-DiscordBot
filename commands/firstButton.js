const { EmbedBuilder } = require('@discordjs/builders');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data:
        new SlashCommandBuilder()
            .setName('buttontest')
            .setDescription('A slash command that will generate a button to click'),

            async execute(interaction) {
                if (!interaction.isChatInputCommand()) return;

                if (interaction.commandName === 'buttontest'){
                    const row = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('firstbutton')
                                    .setLabel('Click me!')
                                    .setStyle(ButtonStyle.Primary)
                            );

                    const embed = new EmbedBuilder()
                                .setColor(0x0099FF)
                                .setTitle('A Huge Title')
                                .setURL('https://youtube.com')
                                .setDescription('A cool description');
                                                                        
                        await interaction.reply({ content: 'I think you should', embeds:[embed], components: [row]})

                    }
            }
            
}

