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
            if(msg === prefix + "mk1" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 1========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "mk2" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 2========') // Sends a message to the channel, with the content
                }
             if(msg === prefix + "mk3" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 3========') // Sends a message to the channel, with the content
             }
            if(msg === prefix + "mk4" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 4========') // Sends a message to the channel, with the content
            }
            if(msg === prefix + "mk5" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 5========') // Sends a message to the channel, with the content
            }
            if(msg === prefix + "mk6" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 6========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "mk7" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 7========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "mk8" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 8========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "mk9" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 9========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "mk10" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 10========') // Sends a message to the channel, with the content
            }
            if(msg === prefix + "mk11" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 11========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "mk12" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 12========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "mk13" && message.channel.id === "595636170025730048"){
                message.channel.send('========QUESTION NO. 13========') // Sends a message to the channel, with the content
        
           
        }
    }
});

bot.login(process.env.BOT_TOKEN)
