const { MessageEmbed, Message, Client } = require("discord.js")
const emoji = require("../config/emoji")

  Message.prototype.sendE = function(string, options = {}){
    const embed = new MessageEmbed()
    .setAuthor(this.author.username, this.author.displayAvatarURL())
    .setDescription(string)
    .setColor("RANDOM")
       .setFooter(`\©${new Date().getFullYear()} globe.io`)
    .setTimestamp()
    
    if(options.title){
      embed.setTitle(options.title)
    }
    if(options.image){
      embed.setImage(options.image)
    }
    if(options.edit){
      this.edit({embeds: [embed]})
    }else{
      this.channel.send({embeds: [embed], components: options.row ? [options.row] : []})
    }
  }



Message.prototype.error = function(string){
this.reply({embeds: [new MessageEmbed(). setAuthor(this.author.username, this.author.displayAvatarURL()).setDescription(`${emoji.no}` + " | " + string).setColor("RED").setFooter(`\©${new Date().getFullYear()} globe.io`)
    .setTimestamp()]})
}

Message.prototype.success = function(string){
  this.reply({embeds: [
    new MessageEmbed()
  .setAuthor(this.author.username, this.author.displayAvatarURL())
  .setDescription(`${emoji.yes} | ${string}`)
    .setColor("GREEN")
    .setFooter(`\©${new Date().getFullYear()} globe.io`)
    .setTimestamp()
  ]})
}

Message.prototype.load = async function(string, options = {}){
  
  this.reply({embeds: [
    new MessageEmbed()
  .setAuthor(this.author.username, this.author.displayAvatarURL())
  .setDescription(`${emoji.load} | ${string}`)
    .setColor("GREEN")
  ]}).then(msg => {
      setTimeout(() => {
        msg.delete()
      }, options.timeOut ? options.timeOut : 5000)
  })
}