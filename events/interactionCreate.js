const { Events } = require('discord.js');

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
}};