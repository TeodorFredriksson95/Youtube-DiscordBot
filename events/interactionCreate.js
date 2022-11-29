const { Events, EmbedBuilder, Collection } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
	if (interaction.isChatInputCommand()) {
		// command handling
		const command = interaction.client.commands.get(interaction.commandName);
		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}
		try {
			await command.execute(interaction);
		} catch (error){
			console.error(error);
		}
		
	} else if (interaction.isAutocomplete()) {
		const command = interaction.client.commands.get(interaction.commandName);
		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}
		try {
			await command.autocomplete(interaction);
		} catch (error) {
			console.error(error);
		}
	} else if (interaction.isButton()) {
		if (interaction.customId.includes('-button')) {
			if (interaction.customId.includes('danger')) {
				await interaction.reply({ content: `Color Danger: #ED4245`})
			} else if (interaction.customId.includes('success')) {
				await interaction.reply({ content: `Color Success: #57F287`})
			} else if (interaction.customId.includes('primary')) {
				await interaction.reply({ content: `Color Primary: 5865F2`})
			} 
		}

		else if (interaction.customId.includes('firstbutton')){
			await interaction.reply({ content: "You clicked a motherfucking button.\"gratz\" "})
		}
	}

	else if (interaction.isSelectMenu()) {
		const selected = interaction.values[0];

		if (selected === 'first_option'){
						//   const embed = new EmbedBuilder()
                        //             .setColor(0x0099FF)
                        //             .setTitle(selected)
                        //             .setURL('https://www.youtube.com/watch?v=boPyHl3iptQ&ab_channel=MrBunsen1')
                        //             .setDescription('You see this message because the first option was clicked');
			// await interaction.update({ content: `${selected} was clicked`, embeds: [embed] })
			await interaction.update({ content: `https://www.youtube.com/watch?v=boPyHl3iptQ&ab_channel=MrBunsen1`, components: [], embeds: [] })
		}
		else if (selected === 'second_option'){
			//   const embed = new EmbedBuilder()
            //                         .setColor(0x0099FF)
            //                         .setTitle('https://www.youtube.com/watch?v=owPc4WNFZMg&ab_channel=IncliningTuna')
            //                         .setURL('https://www.youtube.com/watch?v=owPc4WNFZMg&ab_channel=IncliningTuna')
            //                         .setDescription('https://www.youtube.com/watch?v=owPc4WNFZMg&ab_channel=IncliningTuna');
			// await interaction.update({ content: `${selected} was clicked`, embeds: [embed] })
			await interaction.update({ content: `https://www.youtube.com/watch?v=owPc4WNFZMg&ab_channel=IncliningTuna`, components: [], embeds: []})
		}

	} else if (interaction.isModalSubmit()){
		if (interaction.customId === 'myModal') {

			const favCol = interaction.fields.getTextInputValue('favoriteColorInput');
			const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
			console.log({favCol});
			console.log(favCol);
			console.log(hobbies);
			await interaction.reply({ content: 'Your submission of guilt was recieved. Calling local authorities'})
		}
	}

}};