const Schema = require("../../models/GuildProfile")

module.exports = {
    handleOneWord: async function(client, message) {
        let data = await Schema.findOne({_id: message.guild.id})

        if(!data) return;

        if(!data.channels.oneWord) return;

        if(message.guild.me.permissions.has("MANAGE_CHANNELS", "MANAGE_WEBHOOKS")) return message.error("I need MANAGE_CHANNELS and MANAGE_WEBHOOKS perms to work.")

        if(message.channel.rateLimitPerUser !== 5 || message.channel.rateLimitPerUser <= 5) {
            message.channel.setRateLimitPerUser(5)
        }

        if(!client.oneword.get("game", message.author.id)) return message.error("Its not your turn!")

        if(!message.content) return;

        let args = message.content.split(/ + /g)

        if(args.length > 1) return message.error("You can only send 1 word at time.")

        for(const guild of client.guilds.cache) {

            let Data = await Schema.findOne({_id: guild.id})

            if(!Data || !Data?.channels?.oneWord) return;

            let channel = client.channels.cache.get(Data.channels.oneWord)
            if(!channel) return;
                        if(channel.rateLimitPerUser !== 5 || channel.rateLimitPerUser <= 5) {
                channel.setRateLimitPerUser(5)
            }

            await channel.createWebhook(message.author.tag, {
                avatar: message.author.displayAvatarURL({
                    format: 'png',
                    dynamic: true,
                    size: 128 
                })
            })
                .then(webhook => Promise.all([webhook.send(m{content: args[0]}, webhook]))
                .then(([_, webhook]) => webhook.delete())
                .catch(() => {});
        }
    }
}