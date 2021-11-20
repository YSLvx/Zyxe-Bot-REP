const Discord = require("discord.js")
const Command = require("../Structure/Command")

module.exports = new Command({
    
    name: "help",
    description: "Commande d'aide",
    utilisation: "help",
    permission : "Aucune",
    category: "Utilitaires",

    async run(bot, message, args, db) {
        const HelpEmbed = new Discord.MessageEmbed()
	.setColor('#e3c4a1')
	.setTitle('Liste des commandes :')
	.setAuthor("Commande d'aide ")
	.addFields(
		{ name: `\`Utilitaire :\` `, value: `**+invite :** _Permet d'inviter le bot sur vôtre serveur._ \n **+ping :**  _Permet de connaitre le ping du bot._ \n **+help :** _Permet d'avoir l'embed d'aide._ \n **+avatar {mention où non} :** _Permet d'afficher son propre avatar ou celui d'une personne mentionnée._`, inline: false },
		{ name: `\`Modération :\` `, value: `**+clear {nombre} :** _Permet de supprimer un grand nombre de messages._ \n **+prefix : {NouveauPréfixe}** _Permet de changer le préfixe du bot._ `, inline: false },
        { name: `\` Expérience :\` `, value: `**+rank :** _Permet d'afficher votre rang sur le serveur ainsi que votre XP._`}
	)
	.setImage('https://i.pinimg.com/originals/00/8a/02/008a02e89562569705c2b30d465e1ba1.gif')
	.setFooter(`Demandé par ${message.author.username}`);
    message.channel.send({embeds : [HelpEmbed]})
    }
})