const Discord = require("discord.js")
const Command = require("../Structure/Command")

module.exports = new Command({
    
    name: "britney",
    description: "it's britney bitch",
    utilisation: "britney",
    permission : "Aucune",
    category: "fun",

    async run(bot, message, args, db) {
        const BritneyEmbed = new Discord.MessageEmbed()
        .setTitle("It's Britney bitch !")
        .setURL("https://www.youtube.com/watch?v=elueA2rofoo")
        .setAuthor("Who is Britney Spears ?", "")
        .setColor("#e3c4a1")
        .setFooter(`Just because I look sexy on the cover of Rolling Stone doesn't mean I'm naughty.`)
        .setImage("https://c.tenor.com/JxDYs20E7ggAAAAC/britney-spears-wink.gif")
        message.channel.send({ embeds: [BritneyEmbed] })
    }
})