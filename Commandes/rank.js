const Discord = require("discord.js")
const Canvas = require("discord-canvas-easy")
const Command = require("../Structure/command")

module.exports = new Command({

    name: "rank",
    description: "Permet de savoir l'expérience d'un utilisateur",
    utilisation: "rank (membre) / rank",
    permission: "Aucune",
    category: "Expérience",

    async run(bot, message, args, db) {

        let user = message.user === undefined ? (message.mentions.users.first() || bot.users.cache.get(args[0])) : (args._hoistedOptions.length === 0 ? message.user : bot.users.cache.get(args._hoistedOptions[0].value))
        if(!user) user = message.author;

        await message.reply(`Laisse moi deux petites secondes le temps de faire ta rank card..`).then(async msg => {

            db.query(`SELECT * FROM user WHERE userID = ${user.id}`, async (err, req) => {

                if(req.length < 1) {
                    try {
                        message.editReply("Cet utilisateur n'a pas été enregistré.")
                        return;
                    } catch (err) {
                        msg.edit("Cet utilisateur n'a pas été enregistré.")
                        return;
                    }
                }
    
                const calculXp = async (xp, level) => {
    
                    let xptotal = 0;
    
                    for(let i = 0; i < (level + 1); i++) {
    
                        xptotal = xptotal + (i * 1000)
                    }
    
                    xptotal = xptotal + xp
    
                    return xptotal;
                }
    
                db.query(`SELECT * FROM user`, async (err, all) => {
    
                    const Rank = await new Canvas.Card()
                    .setBot(bot)
                    .setBackground("./background.jpg")
                    .setGuild(message.guild)
                    .setUser(user)
                    .setXp(parseInt(req[0].xp))
                    .setXpNeed((parseInt(req[0].level) + 1) * 1000)
                    .setLevel(parseInt(req[0].level))
                    .setRank()
                    .setColorFont("#838784")
                    .setColorProgressBar("#949cf7")
                    .toCard()
    
                    const attachment = new Discord.MessageAttachment(Rank.toBuffer(), 'rank.png')
    
                    try {
                        msg.edit({content: null, files: [attachment]})
                    } catch (err) {
                        message.editReply({content: null, files: [attachment]})
                    }
                })
            })
        })
    }
})