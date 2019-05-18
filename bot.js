const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity('', { type: 'PLAYING' })
});
 
 
 
 const Discord = require('discord.js');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  

const Util = require('discord.js');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  

const getYoutubeID = require('get-youtube-id');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  

const fetchVideoInfo = require('youtube-info');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  

const convert = require("hh-mm-ss")//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  

const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";

const YouTube = require('simple-youtube-api');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  

const queue = new Map();//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  

const ytdl = require('ytdl-core');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  

const fs = require('fs');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  

const gif = require("gif-search");//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  

const client = new Discord.Client({disableEveryone: true});//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  

const prefix = "-";//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  
var adminprefix = '-'//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  
/////////////////////////
////////////////////////

 client.on('message', async msg => {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
       if (!msg.channel.guild) return;//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    if (msg.author.bot) return undefined;//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    if (!msg.content.startsWith(prefix)) return undefined;//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    const args = msg.content.split(' ');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    const searchString = args.slice(1).join(' ');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    const url = args[1] ? args[1] .replace(/<(.+)>/g, '$1') : '';//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    const serverQueue = queue.get(msg.guild.id);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    let command = msg.content.toLowerCase().split(" ")[0];//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    command = command.slice(prefix.length)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    if (command === `play`) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        const voiceChannel = msg.member.voiceChannel;//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        if (!voiceChannel) return msg.channel.send('يجب تواجدك بروم صوتي | :x:');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            return msg.channel.send('يجب اعطاء البوت صلاحيه لدخول الروم | :x:');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        }//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        if (!permissions.has('SPEAK')) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            return msg.channel.send('يجب اعطاء البوت صلاحيه للتكلم بلروم | :x:');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        }//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
 
        if (!permissions.has('EMBED_LINKS')) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            return msg.channel.sendMessage("**يجب اعطاء البوت صلاحيه ``EMBED_LINKS`` | :x:**")//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            }//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
 
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            const playlist = await youtube.getPlaylist(url);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            const videos = await playlist.getVideos();//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            for (const video of Object.values(videos)) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                const video2 = await youtube.getVideoByID(video.id);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                await handleVideo(video2, msg, voiceChannel, true);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            }//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            return msg.channel.send(`**${playlist.title}**الي قائمه التشغيل Play List تم اضافه ال  | :white_check_mark:`);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        } else {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            try {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
 
                var video = await youtube.getVideo(url);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
 
            } catch (error) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                try {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                                            var fast = {};//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                    var videos = await youtube.searchVideos(searchString, 10);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                    let index = 0;//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                    const embed1 = new Discord.RichEmbed()//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                    .setDescription(`**يرجا كتابه رقم المقطع ** 
${videos.map(video2 => `[**${++index}**] **${video2.title}**`).join('\n')}`)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    .setFooter(`Requested by | ${msg.author.tag}`);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                    msg.channel.sendEmbed(embed1).then(message =>{//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
 //@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                        message.delete(15000)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
 
                    });//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                    try {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                            maxMatches: 1,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                            time: 20000,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                            errors: ['time']//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                        })//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
 
                        }catch(err) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                        console.error(err);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                        return msg.channel.send('**لم يتم اختيار رقم | :x:**');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                        }//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                    const videoIndex = parseInt(response.first().content);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                } catch (err) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                    console.error(err);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                    return msg.channel.send('**لا يتوفر نتائج بحث | :x:**');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
                }//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        }//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
 
            return handleVideo(video, msg, voiceChannel);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        }//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    } else if (command === `skip`) {
        if (!msg.member.voiceChannel) return msg.channel.send('انت لست في روم صوتي | :x:');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        if (!serverQueue) return msg.channel.send('**يجب تشغيل مقطع لتخطيه | :x:**');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        serverQueue.connection.dispatcher.end('**تم بنجاح | :white_check_mark:**');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        return undefined;//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    } else if (command === `stop`) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        serverQueue.songs = [];//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        return undefined;//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    } else if (command === `volume`) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        if (!serverQueue) return msg.channel.send('**يجب اختيار مقطع لي تغيير حجم صوته | :x:**');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        if (!args[1]) return msg.channel.send(`**__${serverQueue.volume}__ مستوي الصوت الحالي هو | :loud_sound:**`);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        serverQueue.volume = args[1];//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        return msg.channel.send(`**__${args[1]}__ تم تغيير مستوي الصوت الي | :loud_sound:**`);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    } else if (command === `song`) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        const embedNP = new Discord.RichEmbed()//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    .setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        return msg.channel.sendEmbed(embedNP);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    } else if (command === `restart`) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        const embedNP = new Discord.RichEmbed()//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    .setDescription(`سيتم اعاده تشغيل الفديو :**${serverQueue.songs[0].title}**`)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    msg.channel.send({embed: embedNP})//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
     return handleVideo(video, msg, msg.member.voiceChannel);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
 
    } else if (command === `queue`) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        let index = 0;//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        const embedqu = new Discord.RichEmbed()//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        return msg.channel.sendEmbed(embedqu);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    } else if (command === `pause`) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        if (serverQueue && serverQueue.playing) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            serverQueue.playing = false;//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            serverQueue.connection.dispatcher.pause();//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        }//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        return msg.channel.send('لا يوجد شيء حالي ف العمل.');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    } else if (command === "run") {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        if (serverQueue && !serverQueue.playing) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            serverQueue.playing = true;//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            serverQueue.connection.dispatcher.resume();//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        }//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        return msg.channel.send('لا يوجد شيء حالي في العمل.');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    }
 
    return undefined;//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
async function handleVideo(video, msg, voiceChannel, playlist = false) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    const serverQueue = queue.get(msg.guild.id);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    const song = {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        id: video.id,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        title: Util.escapeMarkdown(video.title),//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        url: `https://www.youtube.com/watch?v=${video.id}`,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        time:`${video.duration.hours}:${video.duration.minutes}:${video.duration.seconds}`,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        eyad:`${video.thumbnails.high.url}`,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        best:`${video.channel.title}`,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        Volume:`100%`,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        by:`<@${msg.author.id}>`,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        channel:`${msg.channel.name}`,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        bees:`${video.raw.snippet.publishedAt}`,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        shahd:`${video.raw.kind}`,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        views:`${video.raw.views}`,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        like:`${video.raw.likeCount}`,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        dislike:`${video.raw.dislikeCount}`,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        hi:`${video.raw.id}`
    };//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    if (!serverQueue) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        const queueConstruct = {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            textChannel: msg.channel,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            voiceChannel: voiceChannel,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            connection: null,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            songs: [],//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            volume: 5,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            playing: true//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        };//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        queue.set(msg.guild.id, queueConstruct);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        queueConstruct.songs.push(song);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        try {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            var connection = await voiceChannel.join();//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            queueConstruct.connection = connection;//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            play(msg.guild, queueConstruct.songs[0]);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        } catch (error) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            console.error(`I could not join the voice channel: ${error}`);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            queue.delete(msg.guild.id);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        }//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    } else {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        serverQueue.songs.push(song);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        console.log(serverQueue.songs);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        if (playlist) return undefined;//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    }//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    return undefined;//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
}
 //@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
function play(guild, song) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    const serverQueue = queue.get(guild.id);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    if (!song) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        serverQueue.voiceChannel.leave();//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        queue.delete(guild.id);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        return;//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    }//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    console.log(serverQueue.songs);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        .on('end', reason => {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            else console.log(reason);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            serverQueue.songs.shift();//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
            play(guild, serverQueue.songs[0]);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        })//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        .on('error', error => console.error(error));//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
        fetchVideoInfo(`${song.hi}`, function (err, fuck) {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
  if (err) throw new Error(err);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
  console.log(fuck);//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
      const yyyy = {}
  if(!yyyy[msg.guild.id]) yyyy[msg.guild.id] = {//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    like: `${fuck.likeCount}`,//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    dislike: `${fuck.dislikeCount}`//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
  }//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    serverQueue.textChannel.send({embed : new Discord.RichEmbed()//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
  .setTitle(`**${fuck.title}**`)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
  .setURL(fuck.url)
  .addField('Duration video ' , `${song.time}`, true)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
  .addField('Name the channel ' , `${song.best}`, true)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
  .addField('Making time ' , `${fuck.datePublished}`, true)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
  .addField('volume ' , `${song.Volume}`, true)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
  .addField('channel ' , `${song.channel}`, true)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
  .addField('Requested by ' , `${song.by}`, true)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
  .addField('Views ' , `${fuck.views}`, true)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
  .addField('Likes👍 ' , `${fuck.likeCount}`, true)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
  .addField('dislike👎 ' , `${fuck.dislikeCount}`, true)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
  .addField('Comments ' , `${fuck.commentCount}`, true)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
  .addField("Download ", `[**Download MP3**](https://www.flvto.biz/sa/downloads/mp3/yt_${video.id})`, true)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    .setImage(`${song.eyad}`)//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    .setColor('#ff0000')//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
    .setTimestamp()//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
//@

 
 
 





 






 
client.login('NTc4Mjg0MDYyNDMxNzcyNjcy.XN-CMw.vv1Y1OTpyQ_Glw4pMghL9R3nYE0');
