const { EmbedBuilder } = require('@discordjs/builders');
const { ActionRowBuilder, Events, SelectMenuBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menus')
        .setDescription('select a menu'),

        async execute(interaction){
            if(!interaction.isChatInputCommand()) return;

            if (interaction.commandName === 'menus'){
                const row = new ActionRowBuilder()
                    .addComponents(
                            new SelectMenuBuilder()
                                .setCustomId('select')
                                .setPlaceholder('Choose a content category')
                                .addOptions(
                                    {
                                        label: "Meme Content 💯",
                                        description: "Meme of the day!",
                                        value: "first_option",
                                    },
                                    {
                                        label: "World of Warcraft ⚔️",
                                        description: "WoW-video of the day!",
                                        value: "second_option",
                                    },
                                ),
                                );
                        // const embed = new EmbedBuilder()
                        //             .setColor(0x0099FF)
                        //             .setTitle('Some title')
                        //             .setURL('https://www.youtube.com/watch?v=boPyHl3iptQ&ab_channel=MrBunsen1')
                        //             .setDescription('Some description here');

                                await interaction.reply({ content: 'Content Menu', components: [row]})
            }
        }
}