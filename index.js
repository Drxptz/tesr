const Discord = require("discord.js")
const bot =  new Discord.Client();
const config = require("./config.json")


console.log("je suis prêt")
bot.login(config.token)