const Event = require("../../../Structure/event");
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { SlashCommandBuilder } = require("@discordjs/builders")
const { token } = require("../../../config")


module.exports = new Event("guildCreate", async(bot, guild) => {

    const commands = [

        new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Permet de connaitre la latence du bot."),

        new SlashCommandBuilder()
        .setName("prefix")
        .setDescription("Sert à changer le préfixe du bot.")
        .addStringOption(option => option.setName("prefix").setDescription("Le préfixe que le bot doit avoir.").setRequired(true)),

        new SlashCommandBuilder()
        .setName("clear")
        .setDescription("Permet de supprimer un nombre de messages donné.")
        .addStringOption(option => option.setName("clear").setDescription("Le nombre de message à effacer").setRequired(true)),

    ]

    const rest = new REST({ version: "9"}).setToken(token)

    await rest.put(Routes.applicationGuildCommands(bot.user.id, guild.id), {body : commands})
})