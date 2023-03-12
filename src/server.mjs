import { Client, GatewayIntentBits, SlashCommandBuilder, Routes } from 'discord.js';
import { config } from 'dotenv';
const { REST } = require('@discordjs/rest');


config();


const client = new Client({ intents: ['Guilds', 'GuildMessages', GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, REST] });
//Loading token before login is faster than loading it in the process.
//Also loading the token from .env file, which is safer.
const TOKEN = process.env.BOT_TOKEN

client.login(TOKEN)

const rest = new REST({ version: '9' }).setToken(TOKEN);

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
})

const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong')
];


rest.put(Routes.applicationGuildCommand(clientId, guildId, { body: commands }))
    .then(() => console.log('Succesfully registered application commands'));