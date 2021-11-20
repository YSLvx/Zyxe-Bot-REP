const Discord = require("discord.js");
const fs = require("fs")
const mysql = require("mysql");
const { SlashCommandBuilder } = require("../node_modules/@discordjs/builders/dist");
const intents = new Discord.Intents(32767);
const Command = require("./command");
const Database = require("./Database");
const Events = require("./event");
const slashCommand = require("./SlashCommand");

class Client extends Discord.Client {

    constructor() {
        super({intents})

        /**
         * @type {Discord.Collection<string, command>}
         */

        this.commands = new Discord.Collection();
        this.db = Database;
        this.color = "#ebb681";
    }

    async start(token) {

        fs.readdirSync("./Commandes").filter(file => file.endsWith(".js")).forEach(async f => {

            /**
             * @type {Command}
             */

            let props = require(`../Commandes/${f}`);
            console.log(`${f} commande chargée avec succès !`);
            this.commands.set(props.name, props)
        })

        fs.readdirSync("./Events/").forEach(dirs => {

            fs.readdirSync(`./Events/${dirs}/`).filter(files => files.endsWith(".js")).forEach(async evt => {
              
                /**
                 * @type {Event}
                 */

                const event = require(`../Events/${dirs}/${evt}`);
                console.log(`${event.event}.js évènement chargé !`)
                this.on(event.event, event.run.bind(null, this));

            })
        })

        await slashCommand(this);

        this.login(token)
    }
}
module.exports = Client;