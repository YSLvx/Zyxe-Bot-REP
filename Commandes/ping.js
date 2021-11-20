const Discord = require("Discord.js")
const Command = require("../Structure/command")

module.exports = new Command({
    name: "ping",
    description: "Donne le ping du Bot ainsi que de l'API de Discord.",
    utilisation: "ping",
    permission: "Aucune",
    category: "Informations", 

    async run(bot, message, args, db) {

        const startTimeDB = Date.now()

        db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id}`, async (err, req) => {
            
            const endTimeDB = Date.now()

            const startTime = Date.now()

            await message.reply('En cours...').then(async msg => {
                const endTime = Date.now()
    
                try { await msg.edit(`\`Latence du bot\` :${endTime - startTime}ms\n\`Latence de l'API de discord :\`${bot.ws.ping}ms\n\`Latence de la base de données\`: ${endTimeDB - startTimeDB}ms`)
                    } catch(err) {
                        await message.editReply(`\`Latence du bot\` :${endTime - startTime}ms\n\`Latence de l'API de discord :\`${bot.ws.ping}ms\n\`Latence de la base de données\`: ${endTimeDB - startTimeDB}ms`)
                    }
            })
        })
    }
})