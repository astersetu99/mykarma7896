var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "." //The text before commands, you can put anything that you prefer

    if(message.author.id != "598413507595075617" && message.channel.id === "595636170025730048"){
        if(msg.startsWith('.', 0)){
            if(msg === prefix + "c1" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 1========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "c2" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 2========') // Sends a message to the channel, with the content
                }
             if(msg === prefix + "c3" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 3========') // Sends a message to the channel, with the content
             }
            if(msg === prefix + "c4" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 4========') // Sends a message to the channel, with the content
            }
            if(msg === prefix + "c5" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 5========') // Sends a message to the channel, with the content
            }
            if(msg === prefix + "c6" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 6========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "c7" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 7========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "c8" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 8========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "c9" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 9========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "c10" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 10========') // Sends a message to the channel, with the content
            }
        
           
        }
    }
});

bot.login(process.env.BOT_TOKEN)
