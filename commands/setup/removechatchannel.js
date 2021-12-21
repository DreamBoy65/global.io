module.exports = {
  name: "removechatchannel",
  aliases: [],
  group: "setup",
  description: "remove the global chat game channel.",
  clientPermissions: ["SEND_MESSAGES", 
"EMBED_LINKS", "MANAGE_WEBHOOKS", "MANAGE_CHANNELS"],
  memberPermissions: [],
  examples: ["removechatchannel"],
  cooldown: {
    time: 5000,
    message: ""
  },
  nsfw: false,
  guildOnly: true,
  run: async(client, message, args, data) => {
    try {

        data.channels.chat = null
        await data.save()

        message.success("Successfully removed.")

    } catch (e) {
      message.error("Something went  wrong ;)..\nError: " + e.message + "\nContact my developers to fix it")
      console.log(e)
    }
  }
}