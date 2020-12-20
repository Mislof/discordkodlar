const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

const hata = new Discord.MessageEmbed()
.setDescription('Bu komutu kullanabilmek için yetkin yok.')

if(!message.member.hasPermission("ADMINISTRATOR") return message.channel.send(hata)

var kanal = message.mentions.channels.first()
const hata2 = new Discord.MessageEmbed()
.setDescription('Bir kanal etiketlemelisin.')

if(!kanal) return message.channel.send(hata2)

messsage.channel.send(`Davet kanalı <#${kanal.id}> olarak ayarlandı.`)
db.set(`davetkanal_${message.guild.id}, ${kanal.id}`)
}

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["davetkanal", "davetkanalayarla"],
permLevel: 0
}

exports.help = {
name: "davetkanal-ayarla"

}
