import { Client, GatewayIntentBits, SlashCommandBuilder, Routes } from 'discord.js';
import { config } from 'dotenv';


config();


const client = new Client({ intents: ['Guilds', 'GuildMessages', GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
//Loading token before login is faster than loading it in the process.
//Also loading the token from .env file, which is safer.
const TOKEN = process.env.BOT_TOKEN
const PREFIX = process.env.BOT_PREFIX

client.login(TOKEN)


client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
})

/*
por si quieres reusar esto

client.on(`messageCreate`, (message) => {
    if (message.content == PREFIX + 'comando') {
        message.channel.send("responde");
    }
});

*/


client.on(`messageCreate`, (message) => {
    if (message.content == PREFIX + 'patata') {
        message.channel.send("sisi dame patata caliente papi");
    }
});