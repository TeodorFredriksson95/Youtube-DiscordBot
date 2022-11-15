// When the client is ready, run this code (only once)
// We use 'c' for the event param to keep it separate from already defined 'cleint'

const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
    }
}
