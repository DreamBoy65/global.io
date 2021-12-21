let Schema = require("../../models/GuildProfile")
const { handleOneWord } = require("../../util/handlers/onewordHandler")
module.exports = async (client, message) => {
  
  if (message.author.bot){
    return;
  };

    await handleOneWord(client, message)

  let data;

  if(message.guild && client.config.database.enable){
    
    data = await Schema.findOne({_id: message.guild?.id})
    
  if(!data){
    
   let Data = new Schema({_id: message.guild?.id})
    
    await Data.save()
    
    data = await Schema.findOne({_id: message.guild?.id})
  } 
}

  const serverprefix = data?.prefix || "Not set."
  

  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){
    return message.channel.send(`${message.author}, My prefix is \`${serverprefix}\`, type \`${serverprefix}help\` to check my commands.`)
  }
  const { executed, reason } = await client.commands.handle(message);

return 
}
