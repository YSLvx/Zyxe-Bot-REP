const Discord = require("discord.js")
const Command = require("../Structure/Command")


module.exports = new Command({
    
    name: "serverinfo",
    description: "Permet d'avoir les infos du serveur sur lequel on est.",
    utilisation: "serverinfo",
    permission : "Aucune",
    category: "Utilitaires",

    async run(bot, message, args, db) {
        const ServIcon = `${message.guild.iconURL({type : "png"})}`
        const Creation = `${message.guild.createdAt}`
        const LvlBoost = `${message.guild.premiumTier}`
        if (LvlBoost === "NONE") {
            oui = `**💌 • Nom du serveur :** ${message.guild.name} \n **👑 • Propriétaire :** <@${message.guild.ownerId}> \n **💸 • Nombre de boosts :** ${message.guild.premiumSubscriptionCount} \n **⭐ • Niveau du serveur :** 0`
        } else {
            oui = `**💌 • Nom du serveur :** ${message.guild.name} \n **👑 • Propriétaire :** <@${message.guild.ownerId}> \n **💸 • Nombre de boosts :** ${message.guild.premiumSubscriptionCount} \n **⭐ • Niveau du serveur :** ${LvlBoost} `
        }
        const ServeurInfoEmbed = new Discord.MessageEmbed()
        .setTitle(`Voici les informations du serveur ${message.guild.name}`)
        .addFields(
            { name: "__**Informations sur le serveur :**__", value: `${oui} \n **📆 • Serveur créé le :** ${Creation}`},
            {name : "__**Informations sur les membres :**__", value : `🟢 **• Membres connectés : value** valeur \n 🔴 **• Membres en ne pas déranger :** valeur, \n 🌙 **• Membres absents :** valeur \n⚪ **• Membres déconnectés :** valeur`}
            )
        .setThumbnail(ServIcon)
        .setColor("#e3c4a1")
        message.channel.send({ embeds : [ServeurInfoEmbed]})
        console.log(" ")
    }
})