const settings = require("../configs/settings.json");
const { MessageEmbed } = require("discord.js");
const client = global.client;

/**
 * @param { Client } client
 * @param { Message } message
 */

module.exports = async (message) => {
client.user.setActivity("Dragon Strom Fantasty - BOT")
};

module.exports.conf = {
  name: "ready",
};
