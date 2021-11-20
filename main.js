const { token } = require("./config");
const Client = require("./Structure/client")
const bot = new Client();

bot.start(token)