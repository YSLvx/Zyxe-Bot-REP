/** @format */
const Discord = require("discord.js")
const Client = require("./Client")
const mysql = require("mysql")

/**
 * @param {Client} bot 
 * @param {Discord.Message | Discord.CommandInteraction} message 
 * @param {string[] | Discord.InteractionDeferUpdateOptions}  args 
 * @param {mysql.connection} db
 */

function RunFunction(bot, message, args) {}

class Command {

    /**
     * @typedef {(name : string, description : string, utilisation : string, permission : string, category : string, run : RunFunction)}
     * @param {CommandOptions} option  
     */
    
    constructor(option) {
        this.name = option.name;
        this.description = option.description;
        this.utilisation = option.utilisation;
        this.permission = option.permission;
        this.category = option.category;
        this.run = option.run;
    }
}
module.exports = Command;