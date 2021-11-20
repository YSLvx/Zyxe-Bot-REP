const Discord = require("discord.js")
const Command = require("../Structure/Command")


module.exports = new Command({
    
    name: "userinfo",
    description: "Permet d'avoir les infos d'un user.",
    utilisation: "userinfo",
    permission : "Aucune",
    category: "Utilitaires",

    async run(bot, message, args, db) {
        if(message.mentions.users.size){
            let member=message.mentions.users.first()
            const userEmbed = new Discord.MessageEmbed()
            .setTitle("Informations d'utilisateur")
            .setThumbnail(member.displayAvatarURL())
            .addFields(
                {name : `**Compte créé depuis :**`, value : `${member.createdAt}`, inline : true},
                {name : `**Membre du serveur depuis le :**`, value : `${Date(member.joinedAt)}`, inline : true}
            )
            .setTitle(`Voici les infos de ${member.username}`)
            .setFooter(`ID : ${member.id}`)
            .setColor("#e3c4a1")
            message.channel.send({embeds : [userEmbed]})
    } else {
        const userEmbed = new Discord.MessageEmbed()
            .setTitle("Informations d'utilisateur")
            .setThumbnail(message.author.displayAvatarURL())
            .addFields(
                {name : `**Compte créé depuis :**`, value : `${message.author.createdAt}`, inline : true},
                {name : `**Membre du serveur depuis le :**`, value : `${Date(message.member.joinedAt)}`, inline : true}
            )
            .setTitle(`Voici les infos de ${message.author.username}`)
            .setFooter(`ID : ${message.author.id}`)
            .setColor("#e3c4a1")
            message.channel.send({embeds : [userEmbed]})
    }}

})