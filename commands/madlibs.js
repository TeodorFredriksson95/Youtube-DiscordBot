const { SlashCommandBuilder } = require("discord.js");
const madlibs = require("../events/madlibs");


module.exports = {
    data: 
    new SlashCommandBuilder()
        .setName('madlibs')
        .setDescription('Replies with a random message'),

        async execute(interaction){
            const madLibsArr = ['a random message', 'heeeelluuuuu rng', 'Sweeeeeeeet Carooline']
            let x = Math.floor((Math.random() * madLibsArr.length));

            console.log(interaction)

            const message = madLibsArr[x]
            await interaction.reply(message)
        },
};
