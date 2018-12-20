// Do not scream at my code. It is perfectly valid. 

// I appreciate Xinfity#2965 for the years before where he invested his time to teach me code.

const { RichEmbed, Client, DiscordAPIError } = require('discord.js'), // Get the instances from the module
  client = new Client({}); // Define client as a new instance of a client

client.on('ready', () => { // Event: Ready ; Emits whenever bot runs
  console.log('Bot session started.'); // Logs to console 'Bot session started.'
  client.user.setActivity(`over ${bot.guilds.size} guilds`, { type: 'WATCHING' }); // Sets the game as: Watching over [guild size] guilds
});

client.on('error', console.error) // Event: Error ; Here to catch the "Unhandled error event" error

client.on(

