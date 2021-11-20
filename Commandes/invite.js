const Discord = require("discord.js")
const Command = require("../Structure/Command")

module.exports = new Command({
    
    name: "invite",
    description: "Permet d'inviter le bot",
    utilisation: "invite",
    permission : "Aucune",
    category: "Utilitaires",

    async run(bot, message, args, db) {
        const InviteEmbed = new Discord.MessageEmbed()
        .setTitle("Voici mon lien d'invitation : ")
        .setURL("https://discord.com/api/oauth2/authorize?client_id=905469436335652934&permissions=8&scope=bot%20applications.commands")
        .setAuthor("On me demande ?", "")
        .setColor("#e3c4a1")
        .setDescription("Fais-en bon usage !")
        .setFooter(`Demandé par ${message.author.username}`)
        .setImage("https://c.tenor.com/jUxhPh_wFE8AAAAM/yellow-pretty.gif")
        message.channel.send({ embeds: [InviteEmbed] })
    }
})