const { SlashCommandBuilder, ChannelType } = require("discord.js");
const { execute } = require("./localResponse");

module.exports = {
    data: 
    new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The gif category')
                .setRequired(true)
                .addChoices(
                    {name: 'Funny', value: 'gif_funny'},
                    {name: 'Meme', value: 'gif_meme'},
                    {name: 'Movie', value: 'gif_movie'},
                    )),
        // .addChannelOption(option =>
        //     option.setName('channel')
        //     .setDescription('The channel to echo into')
        //     .addChannelTypes(ChannelType.GuildText))

        // .addBooleanOption(option =>
        //     option.setName('embed')
        //     .setDescription('Whether or not the echo should be embedded')),

            async execute(interaction) {
                const category = interaction.options.getString('category');
                await interaction.reply(category);
            }

};

