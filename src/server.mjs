import { config } from 'dotenv'
import { Client, GatewayIntentBits } from 'discord.js';

config();

const client = new Client({ intents: ['Guilds', 'GuildMessages', GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
//Loading token before login is faster than loading it in the process.
//Also loading the token from .env file, which is safer.
const TOKEN = process.env.BOT_TOKEN

client.login(TOKEN)

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
})
