const Discord = require("discord.js")
const Command = require("../Structure/Command")

module.exports = new Command({
    
    name: "nicki",
    description: "nicki minaj is the queen of the rap !",
    utilisation: "nicki",
    permission : "Aucune",
    category: "fun",

    async run(bot, message, args, db) {
        const NickiEmbed = new Discord.MessageEmbed()
        .setTitle("NICKI MINAJ IS THE QUEEN OF RAP !")
        .setURL("https://www.youtube.com/watch?v=CLEamM8DP00")
        .setAuthor("Who is Nicki minaj ?", "")
        .setColor("#e3c4a1")
        .setFooter(`And that's on periodt.`)
        .setImage("https://c.tenor.com/XUjkM7pc_oAAAAAd/nicki-minaj-twerking.gif")
        message.channel.send({ embeds: [NickiEmbed] })
    }
})