const { MessageActionRow, MessageButton } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hex')
        .setDescription('Displays Discord hex color codes.'),

        async execute(interaction, client) {
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('danger-button')
                        .setLabel('Danger')
                        .setStyle('Danger'),

                    new ButtonBuilder()
                        .setCustomId('success-button')
                        .setLabel('Success')
                        .setStyle('Success'),

                    new ButtonBuilder()
                        .setCustomId('primary-button')
                        .setLabel('Primary')
                        .setStyle('Primary'),

                    new ButtonBuilder()
                        .setLabel('Youtube')
                        .setStyle('Link')
                        .setURL('https://www.youtube.com/watch?v=oB7hgvqALMM&ab_channel=Xplainingcapoeira'),
                );

                await interaction.reply({ epheremal: true, content: 'Click buttons to get colors', components: [row]})
        }
}
