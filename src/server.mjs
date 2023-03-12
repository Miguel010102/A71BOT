import { config } from 'dotenv'
import { Client, GatewayIntentBits, SlashCommandBuilder, userMention } from 'discord.js';

config();

const client = new Client({ intents: ['Guilds', 'GuildMessages', GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
//Loading token before login is faster than loading it in the process.
//Also loading the token from .env file, which is safer.
const TOKEN = process.env.BOT_TOKEN
const CLIENT_ID = process.env.CLIENT_ID

client.login(TOKEN)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hola 7B1OT')
		.setDescription('Saludas al bot'),
	async execute(interaction) {
		await interaction.reply('hola');
	},
};

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
})
