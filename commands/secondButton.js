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

                const secondRow = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('testingrowtwo')
                            .setLabel('Testing second row of buttons')
                            .setStyle('Primary'),

                        new ButtonBuilder()
                            .setCustomId('testingEmojis')
                            .setLabel('fucking emoji')
                            .setStyle('Danger')
                            .setEmoji('😒')
                    )

                await interaction.reply({ epheremal: true, content: 'Click buttons to get colors', components: [row, secondRow]})
        }
}
