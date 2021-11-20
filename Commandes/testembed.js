const Discord = require("discord.js")
const Command = require("../Structure/Command")

module.exports = new Command({
    
    name: "testembed",
    description: "0",
    utilisation: "testembed",
    permission : "Aucune",
    category: "test",

    async run(bot, message, args, db) {
        const LvlUpEmbed = new Discord.MessageEmbed()
                    .setTitle(`Tu es passé.e au niveau {lvl}`)
                    .setAuthor(`Bravo {user} !`, "")
                    .setColor("#e3c4a1")
                    .setFooter(`Continues comme ça !`)
                    .setImage("https://i.pinimg.com/originals/7d/f0/fb/7df0fb965ead9905d077fd21b6c03d35.gif")
                    message.channel.send({ embeds: [LvlUpEmbed] })
    }
})
                    