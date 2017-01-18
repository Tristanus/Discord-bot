const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("message", (message) => {

    if(message.content == "hoang"){
        message.channel.sendMessage("Loempiavouwer");
    }

    else if(message.content == "david"){
        message.channel.sendMessage("Embrace the weeb");
    }

    else if(message.content == "tycho"){
        message.channel.sendMessage("YO!");
    }

    else if(message.content == "trung"){
        message.channel.sendMessage("u gay?");
    }

    else if(message.content == "timothy"){
        message.channel.sendMessage("Gijsbert");
    }

});

bot.login("MjcwOTI1NDEzMTEzNTI4MzIx.C1--jg.f-KTIsZ66dboivNX-oFF3F_cZfg");