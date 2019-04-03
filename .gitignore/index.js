const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";

client.on("ready", function() {
    client.user.setGame("manger des Frites");
});

client.login(process.env.TOKEN);

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
    if(message.content === "Bonjour" || message.content === "bonjour" || message.content === "yo" || message.content === "Yo" || message.content === "Salut" || message.content === "salut"){
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
