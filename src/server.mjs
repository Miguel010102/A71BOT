import { Client, GatewayIntentBits, EmbedBuilder } from 'discord.js';
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

client.on(`messageCreate`, (message) => {
    if (message.content == PREFIX + 'hola') {
        message.channel.send("no");
    }
});

client.on(`messageCreate`, (message) => {
    if (message.content == PREFIX + 'numero') {
        let num = Math.floor(Math.random() * 10) + 1;
        num = num.toString();
        message.channel.send('Numero de 1 a 10: '+num);
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
                { name: '7numero', value: 'Numero random de 1 a 10.', inline: false}
            )
        message.channel.send({ embeds: [embedhelp] });
    }
});
