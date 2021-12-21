module.exports = {
  name: "setlastwordchannel",
  aliases: [],
  group: "setup",
  description: "set the global last word game channel.",
  clientPermissions: ["SEND_MESSAGES", 
"EMBED_LINKS", "MANAGE_WEBHOOKS", "MANAGE_CHANNELS"],
  memberPermissions: [],
  examples: ["setlastwordchannel #lastword"],
  cooldown: {
    time: 5000,
    message: ""
  },
  nsfw: false,
  guildOnly: true,
  run: async(client, message, args, data) => {
    try {
        let channel = await client.resolvers.resolveChannel({
            message,
            search: args.join(" "),
            channelType: "GUILD_TEXT"
        })

        if(!channel) return message.error("Mention a channel .")

        data.channels.lastWord = channel.id
        await data.save()

        message.success("Setup complete.")

    } catch (e) {
      message.error("Something went  wrong ;)..\nError: " + e.message + "\nContact my developers to fix it")
      console.log(e)
    }
  }
}