import { Client, GatewayIntentBits, EmbedBuilder } from 'discord.js';
import { config } from 'dotenv';
import { createAudioResource, createAudioPlayer, joinVoiceChannel, AudioPlayerStatus, StreamType } from '@discordjs/voice';
import ytdl from 'ytdl-core';


config();


const client = new Client({ intents: ['Guilds', 'GuildMessages', GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
//Loading token before login is faster than loading it in the process.
//Also loading the token from .env file, which is safer.
const TOKEN = process.env.BOT_TOKEN
const PREFIX = process.env.BOT_PREFIX

client.login(TOKEN)

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
    client.user.setPresence({ activities: [{ name: ' :)' }], status: 'idle' });
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


client.on(`messageCreate`, (message) => {
    if (message.content == PREFIX + 'ping') {
        message.channel.send(`Pong! ${client.ws.ping}ms`);
    }
});

client.on(`messageCreate`, (message) => {
    if (message.content == PREFIX + 'hola') {
        message.channel.send("no");
    }
});

client.on('messageCreate', message => {
    if (message.content.startsWith(PREFIX + 'numero')) {
        const args = message.content.slice(8).trim().split(' ');
        const min = parseInt(args[0]);
        const max = parseInt(args[1]);

        if (isNaN(min) || isNaN(max)) {
            message.channel.send('Numero Invalido');
            return;
        }

        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        message.channel.send(`Numero random de ${min} asta ${max}: ${randomNum}`);
    }
});


client.on(`messageCreate`, (message) => {
    if (message.content == PREFIX + 'help') {
        const embedhelp = new EmbedBuilder()
            .setColor(0x008b02)
            .setTitle('Lista de comandos')
            .setAuthor({ name: '7B1OT' })
            //.setDescription('Some description here')
            .addFields(
                { name: '7patata', value: 'hehehe', inline: false },
                { name: '7hola', value: 'NO', inline: false },
                { name: '7help', value: 'Esto', inline: false },
                { name: '7numero', value: 'Toma 2 argumentos MIN y MAX (min-max)', inline: false }
            )
        message.channel.send({ embeds: [embedhelp] });
    }
});
