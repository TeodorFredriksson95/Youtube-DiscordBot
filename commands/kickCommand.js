const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Select a member and kick them')
        .addUserOption(option =>
            option
            .setName('target')
            .setDescription('The member to kick')
            .setRequired(true))
        .addStringOption(option =>
            option
            .setName('reason')
            .setDescription('The reason for kicking'))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers | PermissionFlagsBits.KickMembers),

        
        async execute(interaction){
            const target = interaction.options.getUser('target');
            const reason = interaction.options.getString('reason') ?? 'No reason';

            await interaction.reply(`Kicked ${target.username} for: ${reason}`);
            await interaction.guild.members.kick(target);
        }
}