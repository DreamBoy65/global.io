module.exports = {
  name: "removelastwordchannel",
  aliases: [],
  group: "setup",
  description: "remove the global last word game channel.",
  clientPermissions: ["SEND_MESSAGES", 
"EMBED_LINKS", "MANAGE_WEBHOOKS", "MANAGE_CHANNELS"],
  memberPermissions: [],
  examples: ["removelastchannel"],
  cooldown: {
    time: 5000,
    message: ""
  },
  nsfw: false,
  guildOnly: true,
  run: async(client, message, args, data) => {
    try {

        data.channels.lastWord = null
        await data.save()

        message.success("Successfully removed.")

    } catch (e) {
      message.error("Something went  wrong ;)..\nError: " + e.message + "\nContact my developers to fix it")
      console.log(e)
    }
  }
}