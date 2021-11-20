const Discord = require("Discord.js")
const Command = require("../Structure/command")

module.exports = new Command({
    name: "prefix",
    description: "Permet de changer le préfixe du bot.",
    utilisation: "prefix",
    permission: "Administrateur",
    category: "Système",

    async run(bot, message, args, db) {

        db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id}`, async (err, req) => {

            if(!message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) return message.reply("Vous n'avez pas les permissions requises pour utiliser cette commande.")
            let prefix = args[0]
            if(!prefix) return message.reply("Veuillez indiquer un préfixe !")

            const ancienprefix = req[0].prefix;

            db.query(`UPDATE serveur SET prefix = '${prefix}' WHERE guildID = ${message.guild.id}`)

            message.reply(`Vous avez modifié le préfixe, il est passé de \`${ancienprefix} à ${prefix}\` !`)
        })
    }
})