const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "p!";
const sprefix = "sp!"

Client.on('ready', ()=>{
    console.log("Bot is online, fellow.");
    console.log(`Bot has started, with ${Client.users.size} users, in ${Client.channels.size} channels of ${Client.guilds.size} guilds.`);
    
    Client.user.setPresence({ game: { name: (process.env.STATUS), type: 3  } });
    Client.user.setStatus('Online');

    


})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "info")){
        message.channel.send("This bot is a private Discord bot by @Pupppy44#0001 for **Puppy's Server**.")

    }

    if(message.content.startsWith(prefix + "services")){
        message.channel.send("Check your DMs!")
        message.author.send("Services Puppy's Server provides:\n**Bot service**\n**Discord server making**\n**Guides and rulebook makings**\n\n*You can try to request something that isn't on the list. We dont accept Roblox builds or designs.")


    }

    if(message.content.startsWith(prefix + "botservice")){
        message.channel.send("Check your DMs!")
        message.author.send("The bot service is a service where Puppy can make you a bot *only* for your server/group. Puppy can make, edit and host a good bot for you for **free**.\n\nIf you're interested, please DM Puppy. Puppy does not develop normal bots, so the bot MUST be for your server/Roblox group.")
        

    }


    if(message.content.startsWith(prefix + "request")){
        message.channel.send("Check your DMs!")
        message.author.send("Need to request something? Here:\n\nRequesting a Discord server ~ DM @Pupppy44#0001\nRequesting a Roblox related request (handbook, guides, rules, etc.) ~ DM @Pupppy44#0001\nRequesting a server/group bot ~ DM @Pupppy44#0001\n\nPuppy is the ONLY person that makes the request and also leads the server/service.")
        
    }


    if(message.content.startsWith(prefix + "flip")){
        number = 11;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send("Flipped! You got...\n``Heads``"); break;
            case 2: message.channel.send("Flipped! You got...\n``Tails``"); break;
            case 3: message.channel.send("Flipped! You got...\n``Heads``"); break;
            case 4: message.channel.send("Flipped! You got...\n``Tails``"); break;
            case 5: message.channel.send("Flipped! You got...\n``Heads``"); break;
            case 6: message.channel.send("Flipped! You got...\n``Tails``"); break;
            case 7: message.channel.send("Flipped! You got...\n``Heads``"); break;
            case 8: message.channel.send("Flipped! You got...\n``Tails``"); break;
            case 9: message.channel.send("Flipped! You got...\n``Heads``"); break;
            case 10: message.channel.send("Flipped! You got...\n``Tails``"); break;
            case 11: message.channel.send("Flipped! You got...\n``Heads``"); break;


        }
    }




    if(message.content.startsWith(prefix + "avatar")){
        const avatarembed = new Discord.RichEmbed()
        .setTitle(`**${message.author.username}'s avatar:**`)
        .setImage(message.author.displayAvatarURL)
        .setColor('RANDOM')
        message.channel.send({embed: avatarembed})


    }


    if(message.content.startsWith(prefix + "roll")){
        number = 12;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send("Rolled! You got...\n``1``"); break;
            case 2: message.channel.send("Rolled! You got...\n``2``"); break;
            case 3: message.channel.send("Rolled! You got...\n``3``"); break;
            case 4: message.channel.send("Rolled! You got...\n``4``"); break;
            case 5: message.channel.send("Rolled! You got...\n``5``"); break;
            case 6: message.channel.send("Rolled! You got...\n``6``"); break;
            case 7: message.channel.send("Rolled! You got...\n``1``"); break;
            case 8: message.channel.send("Rolled! You got...\n``2``"); break;
            case 9: message.channel.send("Rolled! You got...\n``3``"); break;
            case 10: message.channel.send("Rolled! You got...\n``4``"); break;
            case 11: message.channel.send("Rolled! You got...\n``5``"); break;
            case 12: message.channel.send("Rolled! You got...\n``6``"); break;

        }
    }

    if(message.content.startsWith(prefix + "8ball")){
        var sayings = ["Yes", "No", "Maybe", "Ask again", "Doubt it", "Definitely", "Probably", "Probably not", "In your dreams", " Better not tell you now", "It is certain", "My sources say no", "As I see it, yes"]
        var result = Math.floor((Math.random() * sayings.length) + 0);

        const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const embed = new Discord.RichEmbed()
        .setTitle('8ball Command')
        .addField(args, sayings[result])
        .setColor("#0a0404")
        message.channel.send({embed: embed})

    }

    serverlogo = "./Pictures/puppylogohalloween.png";
    if(message.content.startsWith(prefix + "logo")){

       message.channel.send({ files: [serverlogo]})   /// { files: "./Pictures/Cat1.jpeg"}

    }

    if(message.content.startsWith(prefix + "website")){
        message.channel.send("Website: https://goo.gl/KwTJ8d")

    }


    if(message.content.startsWith(prefix + "help")){
        const embed = new Discord.RichEmbed()
        .setColor("#6896d8")
        .setTitle('Help | Commands')
        .addField("\n\np!help\np!serverinfo\np!rules\np!website\np!logo\np!8ball\np!roll\np!avatar\np!flip\np!request\np!botservice\np!services\np!info\np!joke\np!qotd\n\n**More commands are coming soon!**")
        message.channel.send({embed: embed})

    }

    if(message.content.startsWith(prefix + "joke")){
        number = 10;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send("What do you call a fish with no eyes?\n``Fsh.``"); break;
            case 2: message.channel.send("A ham sandwich walks into a bar and asks for beer, the bartender says:\n``Sorry, we dont serve food.``"); break;
            case 3: message.channel.send("Why couldn't the skeleton go to the dance?\n``Because he had 'no body' to dance with.``"); break;
            case 4: message.channel.send("What lights up a soccer stadium?\n``A soccer match.``"); break;
            case 5: message.channel.send("Why should you not write with a broken pencil?\n``Because it's pointless.``"); break;
            case 6: message.channel.send("Why do people say 'break a leg' when you go up stage?\n``Because everybody has a cast.``"); break;
            case 7: message.channel.send("What do you call a pig that does karate?\n``A pork chop.``"); break;
            case 8: message.channel.send("Why are there gates around cemetries?\n``Because people are dying to get in.``"); break;
            case 9: message.channel.send("When do computers overheat?\n``When they need to vent.``"); break;
            case 10: message.channel.send("Why do bees have sticky hair?\n``Because they use honeycombs.``"); break;

        }
    }
    

        ///if(message.content.startsWith(prefix + "cat")){
            ///number = 19;
            ///var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            ///switch (random) {
                ///case 1: message.channel.send({ files: "./Pictures/Cat1.jpeg"}); break;
                //case 2: message.channel.send({ files: "./Pictures/Cat2.jpg"}); break;
                //case 3: message.channel.send({ files: "./Pictures/Cat3.jpg"}); break;
                //case 4: message.channel.send({ files: "./Pictures/Cat4.jpg"}); break;
                //case 5: message.channel.send({ files: "./Pictures/Cat5.jpg"}); break;
                //case 6: message.channel.send({ files: "./Pictures/Cat6.jpg"}); break;
                //case 7: message.channel.send({ files: "./Pictures/Cat7.jpg"}); break;
               // case 8: message.channel.send({ files: "./Pictures/Cat8.jpg"}); break;
                //case 9: message.channel.send({ files: "./Pictures/Cat9.jpg"}); break;
               //case 10: message.channel.send({ files: "./Pictures/Cat10.jpg"}); break;           
                //case 11: message.channel.send({ files: "./Pictures/Cat11.PNG"}); break;
               // case 12: message.channel.send({ files: "./Pictures/Cat12.jpg"}); break;
               // case 13: message.channel.send({ files: "./Pictures/Cat13.jpg"}); break;
               // case 14: message.channel.send({ files: "./Pictures/Cat14.jpg"}); break;
               // case 15: message.channel.send({ files: "./Pictures/Cat15.jpg"}); break;
              //  case 16: message.channel.send({ files: "./Pictures/Cat16.jpg"}); break;
              //  case 17: message.channel.send({ files: "./Pictures/Cat17.jpg"}); break;
              //  case 18: message.channel.send({ files: "./Pictures/Cat18.jpg"}); break;

            

        if(message.content.startsWith(prefix + "qotd")){
            const embed = new Discord.RichEmbed()
            .setColor("#c4c362")
            .setTitle("Whoops...")
            .addField("Looks like the *QOTD* command has been disabled by cute cat. Dont worry, type **p!help** for more commands.")
            .setImage("https://cdn.discordapp.com/attachments/499923100763422721/500059777020198913/confusedgif.gif")
            message.channel.send({embed: embed})

        }

        if(message.content.startsWith(prefix + "rules")){
            const ruleembed1 = new Discord.RichEmbed()
            .setTitle("**Puppy's Server | Rules**")
            .setColor("RANDOM")
            const ruleembed2 = new Discord.RichEmbed()
            .setTitle("**1. Please, do not spam or spam-mention other people.\n2. Never post any innapropiate or NSFW pictures in any channel. This can lead to a ban.**")
            .setColor("RANDOM")
            const ruleembed3 = new Discord.RichEmbed()
            .setTitle("**3. Be respectful to staff and other members of the server.\n4. Follow all staff orders.\n5. Make sure you're in the correct channel before talking. For example, we dont need a chat in requests.**")
            .setColor("RANDOM")
            const ruleembed4 = new Discord.RichEmbed()
            .setTitle("**6. No earrape, or innapropiate songs in the voice channels. This applies to everybody.\n7. Caps are allowed, but please dont use it like it's broken.\n8. Do not lie, please say the truth for everything...**")
            .setColor("RANDOM")
            const ruleembed5 = new Discord.RichEmbed()
            .setTitle("**9. Do not pretend to be anybody, ever.\n10. Advertising is only allowed in #advertising, advertising in another channel can lead to a kick.\n11. Do not swear or use inappropriate words.**")
            .setColor("RANDOM")
            const ruleembed6 = new Discord.RichEmbed()
            .setTitle("**12. Please use the music bot in #commands and in the music voice channel ONLY. Not following this will result in a warning.**")
            .setColor("RANDOM")
            const ruleembed7 = new Discord.RichEmbed()
            .setTitle("**13. Dont even try to make a staff member abuse their powers. If you see anybody doing, report it to the blacklisting team. The person will get a blacklist for a while, or possibly forever.**")
            .setColor("RANDOM")
            const ruleembed8 = new Discord.RichEmbed()
            .setTitle("**14. Raid if you want a blacklist.**")
            .setColor("RANDOM")
            const ruleembed9 = new Discord.RichEmbed()
            .setTitle("**Everybody must follow these official rules, or concequences will occur.**")
            .setColor("RANDOM")
            const ruleembed10 = new Discord.RichEmbed()
            .setTitle("*Rules are in effect as of: 10/7/18\n\nRules made by Pupppy44 and Lennie\n     Owner | Executive*")
            .setColor("RANDOM")
            message.author.send({embed: ruleembed1})
            message.author.send({embed: ruleembed2})
            message.author.send({embed: ruleembed3})
            message.author.send({embed: ruleembed4})
            message.author.send({embed: ruleembed5})
            message.author.send({embed: ruleembed6})
            message.author.send({embed: ruleembed7})
            message.author.send({embed: ruleembed8})
            message.channel.send(`${message.author}, the holy rules have been sent to you in DMs!`)


        }

        if(message.content.startsWith(prefix + "serverinfo")){
            let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
            let day = message.guild.createdAt.getDate()
            let month = 1 + message.guild.createdAt.getMonth()
            let year = message.guild.createdAt.getFullYear()
             let sicon = message.guild.iconURL;
             
            const serverembed = new Discord.RichEmbed()
            .setTitle(`**Puppy's Server Information**`)
            .setImage('http://prntscr.com/l38am0')
            .addField("Name", message.guild.name, true)
            .addField("ID", message.guild.id, true)
            .addField("**Owner:**", message.guild.owner.user.tag, true)
            .addField(`**Server Created • ${month}/${day}/${year}**`)
            .addField("**Members:**", message.guild.memberCount, true)
            .addField("**Bots:**", message.guild.members.filter(m => m.user.bot).size, true)
            .addField("**Humans:**", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
            .setColor('RANDOM')
            message.channel.send({embed: serverembed})

        }

        /**
 * Send a message using a webhookhttps://pastebin.com/daqwU2hc
 */

// Import the discord.js module

// Create a new webhook
const hook = new Discord.WebhookClient('500057904670310431', 'zkcni-i7tbJEgY1ioiNONFvanbJUCv5doVYjNBOBzfaVKeIOAssV6hC058HL_rI17HBA');

if(message.content.startsWith(prefix + "report")){
    //const reportembed = new Discord.RichEmbed()
   // .setTitle(`Report by: ${message.author} | ID: ${message.author.id}`)
   // .addField(`Channel: ${message.author.channel}`)
  //  .addField(`Report: ${message.content}`)
hook.send(`Report by: ${message.author} | ID: ${message.author.id}\nChannel: ${message.author.channel}\nReport: ${message.content}`)
message.react("✅");

}





})

Client.login(process.env.BOT_TOKEN)
