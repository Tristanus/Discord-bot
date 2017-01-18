const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = "!";

bot.on("message", (message) => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if(command === "say"){
        message.channel.sendMessage(args.join(" "));
    }

    if(command === "add"){
        let numArray = args.map(n=> parseInt(n));
        let total = numArray.reduce( (p, c) => p+c);

        message.channel.sendMessage(total);
    }

    if(command === "hoang"){
        message.channel.sendMessage("Loempiavouwer");
    }

    else if(command === "david"){
        message.channel.sendMessage("Embrace the weeb");
    }

    else if(command === "tycho"){
        message.channel.sendMessage("YO!");
    }

    else if(command === "trung"){
        message.channel.sendMessage("u gay?");
    }

    else if(command === "tim"){
        message.channel.sendMessage("Gijsbert");
    }
});

bot.login("MjcwOTI1NDEzMTEzNTI4MzIx.C1--jg.f-KTIsZ66dboivNX-oFF3F_cZfg");
