const Discord = require("discord.js")
const Command = require("../Structure/Command")

module.exports = new Command({

    name: "avatar",
    description: "Permet d'afficher l'avatar d'un utilisateur",
    utilisation: "avatar {membre}",
    permission: "Aucune",
    category: "Utilitaires",

    async run(bot, message, args, db) {
        if(message.mentions.users.size){
            let member=message.mentions.users.first()
            const AvatarEmbed = new Discord.MessageEmbed()
            .setTitle(`Voici l'avatar de ${member.username}`)
            .setColor("#e3c4a1")
            .setFooter(`Demandé par ${message.author.username}.`)
            .setImage(member.displayAvatarURL())
            message.channel.send({ embeds: [AvatarEmbed] })
    
        }else{
                const AvatarEmbed = new Discord.MessageEmbed()
                .setTitle(`Voici l'avatar de ${message.author.username}`)
                .setColor("#e3c4a1")
                .setFooter(`Demandé par ${message.author.username}.`)
                .setImage(message.author.displayAvatarURL())
                message.channel.send({ embeds: [AvatarEmbed] })}
    
    }})