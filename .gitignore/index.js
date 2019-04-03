const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";

client.on("ready", function() {
    client.user.setGame("manger des Frites");
});

client.login(process.env.TOKEN);


client.on('guildMemberAdd', member =>{
    member.guild.channels.get('504955807067144195').send('Bienvenue ' + member.user + ' sur le discord officiel de la **Patate Army** ! Avant de profiter pleinement du serveur, merci de prendre connaissance du réglement ! Nous te souhaitons un bon moment sur notre espace !');
})

client.on('guildMemberRemove', member =>{
    member.guild.channels.get('504955807067144195').send('Au revoir ' + member.user + ', encore un raciste des patates..');
})


client.on('message', message =>{
    if(message.content === "Patate" || message.content === "patate"){
        message.reply('Patate toi même ! :nerd:');
        console.log('répond');
    }
})

client.on('message', message =>{
    if(message.content === "Prout" || message.content === "prout"){
        message.reply('Euh.. Tu pues ! :poop: ');
        console.log('répond1');
    }
})

client.on('message', message =>{
    if(message.content === "Bonjour" || message.content === "bonjour" || message.content === "yo" || message.content === "Yo" || message.content === "Salut" || message.content === "salut" || message.content === "Salut :wink:"){
        message.reply('Salut jeune Patatawan ! :wink: ');
        console.log('répond2');
    }
})

client.on('message', message =>{
    if(message.content === "Chaton" || message.content === "chaton"){
        message.reply('Miaou ! :cat: ');
        console.log('répond3');
    }
})

client.on('message', message =>{
    if(message.content === "Bite" || message.content === "bite" || message.content === "BITE"){
        message.reply("C'est un très bon complément alimentaire !");
        console.log('répond4');
    }
})
