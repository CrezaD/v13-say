const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "say",
  aliases: ["sayy"],
  execute(message) {
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.react("<:904308125044199424:929478275691077652>")

    const seskanallari = message.guild.channels.cache.filter(c => c.type === 'voice'); 
    let westracc = 0
    let  raxe1 = message.guild.members.cache.size
    let metinkanallari = message.guild.channels.cache.filter(m => m.type == "text").size; 
    for (const [id, voiceChannel] of seskanallari) westracc += voiceChannel.members.size;
    const raxe = new MessageEmbed()
    .setColor("#000a37")
    .setFooter(message.author.tag)
    .setTimestamp()
    .setDescription(`
     Toplam üye sayısı: **${message.guild.memberCount}**
     Toplam çevrimiçi üye sayısı: **${raxe1}**
     Toplam metin kanalı sayısı: **${metinkanallari}**
     Toplam ses kanalı sayısı: **${seskanallari.size}**
     Toplam çevrimiçi durumda olan üye sayısı: **${message.guild.members.cache.filter(m => m.presence && m.presence.status !== "offline").size}**
  `)
  message.reply({ embeds: [raxe]})
      },
};