const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json");

bot.on("guildMemberAdd", member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Welkom in The Vijver, ${member.user}!`);
});

bot.on("message", (message) => {
    if(message.author.bot) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);

    let args = message.content.split(" ").slice(1);

    //tekst output

    if(command == "say"){
        message.channel.sendMessage(args.join(" "));
    }

    if(message.content == "ayy"){
        message.channel.sendMessage("lmao");
    }

    if(command == "hoang"){
        message.channel.sendMessage("Loempiavouwer");
    }

    if(command == "david"){
        message.channel.sendMessage("Embrace the weeb");
    }

    if(command == "tycho"){
        message.channel.sendMessage("YO!");
    }

    if(command == "trung"){
        message.channel.sendMessage("Oh shit!");
    }

    if(command == "tim"){
        message.channel.sendMessage("Wannabefinlando");
    }

    // functional output

    if(command == "add"){
        let numArray = args.map(n=> parseInt(n));
        let total = numArray.reduce( (p, c) => p+c);

        message.channel.sendMessage(total);
    }

    if (command == "kick"){
      let modRole = message.guild.roles.find("name", "temp. Admin");
      if(!message.member.roles.has(modRole.id)){
          return message.reply("Hier heb jij helemaal geen toestemming voor!");
      }
      if(message.mentions.users.size == 0){
        return message.reply("Geef wel een naam mee om te kicken.");
      }
      let kickMember = message.guild.member(message.mentions.users.first());
      if (!kickMember){
        return message.reply("Die pleb bestaat niet, kneus.");
      }
      if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
        return message.reply("I don't have the permissions (KICK_MEMBERS) to do this");
      }
      kickMember.kick().then(member => {
        message.reply(`${member.user.username} is opgerot!`);
      });
    }

    if (command == "ban"){
      let modRole = message.guild.roles.find("name", "temp. Admin");
      if(!message.member.roles.has(modRole.id)){
          return message.reply("Hier heb jij helemaal geen toestemming voor!");
      }
      if(message.mentions.users.size == 0){
        return message.reply("Geef wel een naam mee om te bannen.");
      }
      let banMember = message.guild.member(message.mentions.users.first());
      if (!banMember){
        return message.reply("Die pleb bestaat niet, kneus.");
      }
      if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")){
        return message.reply("I don't have the permissions (BAN_MEMBERS) to do this");
      }
      banMember.ban().then(member => {
        message.reply(`${member.user.username} zien we nooit meer terug!`);
      });
    }

    // visual output

    if(command == "test"){
      message.channel.sendMessage("https://i.ytimg.com/vi/eOXrHqfmuSQ/hqdefault.jpg");
    }

    if(command == "ripHoang"){
      message.channel.sendMessage("https://i.ytimg.com/vi/JbNUTcZbFug/maxresdefault.jpg");
    }

    if(command == "stfu"){
      message.channel.sendMessage("https://www.youtube.com/watch?v=OLpeX4RRo28");
    }

    if(command == "yeet"){
      message.channel.sendMessage("http://imgur.com/gallery/bMajELQ");
    }

    if(command == "gijsbert"){
      message.channel.sendMessage("https://33.media.tumblr.com/6fccce30fc8d0eb3cf3a9d7b1f86c888/tumblr_inline_nwzxlhNZQd1s89x2i_500.gif");
    }
});

bot.login(config.token);
