'use strict';

const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const ms = require("ms");
client.on('ready', () => {
  console.log('Bot online!');
  client.user.setActivity(`watching porn`)
});

const PREFIX = '!';

client.on('message', message => {
  
  if (message.content === '!help') {
    const embed = new MessageEmbed()

      .setTitle('Hey! I am Britney!')
	  .setColor(0xff0011)
	  .addField("``ban`` ``kick`` ``help`` ``mute`` ``unmute`` ``say`` ``info``")
	  .setThumbnail(`https://cdn.discordapp.com/attachments/718881513948577873/719922555754119268/image0-143.jpg`)
	  .setDescription('Here are my commands:')
	  .setAuthor(`🧰│ Help Command`, message.guild.iconURL)
	  .setFooter(`seren │ Britney's Nudes`);

	  message.channel.send(embed);
  }
});

client.on('message', message => {
  
	if (message.content === '!Help') {
	  const embed = new MessageEmbed()
  
		.setTitle('Hey! I am Britney!')
		.setColor(0xff0011)
		.addField("``ban`` ``kick`` ``help`` ``mute`` ``unmute`` ``say`` ``userinfo`` ``serverinfo``")
		.setThumbnail(`https://cdn.discordapp.com/attachments/718881513948577873/719922555754119268/image0-143.jpg`)
		.setDescription('Here are my commands:')
		.setAuthor(`🧰│ Help Command`, message.guild.iconURL)
		.setFooter(`seren │ Britney's Nudes`);
  
		message.channel.send(embed);
	}
  });
  

client.on('guildMemberAdd', async member => {
	const msg = await member.send('Britneys Nudes!');
	
});

client.on('message', message => {
	if (message.author.cleint || !message.guild) return;
	if (!message.content.startsWith(PREFIX)) return;

  
	if (message.content.startsWith(PREFIX + "userinfo")) {
		
		let user = message.mentions.users.frist || message.author;
		let userinfo = {}
	  
		
		userinfo.avatar = user.displayAvatarURL()
		
		userinfo.id = user.id;
		userinfo.status = user.presence.status;
		

		const embed = new MessageEmbed()

		.setAuthor(user.tag, userinfo.avatar)
		.setThumbnail(userinfo.avatar)
		.setColor(0xff0011)
		.addField(`ID`, userinfo.id, true)
		.addField(`Status`, userinfo.status, true)
		
		
		message.channel.send(embed);
	}



	if (message.content.startsWith(PREFIX + "serverinfo")) {
		
		const serverLevel = ["None", "Low", "High", "Max"];

		const embed = new MessageEmbed()
		.setAuthor(message.guild.name, message.guild.iconURL())
		.setThumbnail(message.guild.iconURL())
		.addField(`Owner`, message.guild.owner.user.tag, true)
		.addField(`ID`, message.guild.id, true)
		.setColor(0xff0011)
		.addField(`Roles`, ` V, test `)
		.addField(`Verificatoin Level`, `low`)
		.addField(`Members`, `3`)
		
		
		message.channel.send(embed);
	}
  });

client.on(`guildMemberAdd`,  member => {
	
		const embed = new MessageEmbed()
	
		  .setTitle('Hey! I am Britney!')
		  .setColor(0xff0011)
		  .addField("``ban`` ``kick`` ``help`` ``mute`` ``unmute`` ``say``")
		  .setThumbnail(`https://cdn.discordapp.com/attachments/718881513948577873/719922555754119268/image0-143.jpg`)
		  .setDescription('Here are my commands:')
		 
		  .setFooter(`seren │ Britney's Nudes`);
	
		  
	
})


client.on('message', message => {
	if (message.conetent === "ping"){

		guild.members.forEach(x => {

			x.send(`test?`)
	
		});

	}

	
  });
  

client.on(`message`, message=>{
	let args = message.content.substring(PREFIX.length).split(" ");

	switch(args[0]){
		case `say` :
			message.delete();
			message.channel.send(` ${args.slice(1).join(" ")}`);
	}
})


client.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
   
 
    switch (args[0]) {
        case 'kick':
			
			
			const user = message.mentions.users.first();

			if(user){

				const member = message.guild.member(user);

				if(member){
					member.kick(`you where kick`).then(() => {
						message.reply(`Sucessfully kicked ${user.tag}`);
					}).catch(err => {
						message.reply("You dont have the perms");
						console.log(err)
					});
				} else {
					message.reply(`that user inst in the guild dubmass`)
				}
				

			} else {
				message.reply(`You need to specify the user`)
			}
        break;
    }
 
 
});



client.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
   
 
    switch (args[0]) {
        case 'ban':
			
			
			const user = message.mentions.users.first();

			if(user){

				const member = message.guild.member(user);

				if(member){
					
					member.ban({resson: `you were bad boi`}).then(() => {
						message.reply(`we banned the player ${user.tag}`)
					})

				} else {
					message.reply(`that user inst in the guild dubmass`)
				}
				

			} else {
				message.reply(`You need to specify the user`)
			}
        break;
    }
 
 
});




client.on('message', message => {
   
 
});

	

client.login(process.env.token);