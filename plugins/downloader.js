/*
Queen Sithu Whatsapp Bot    
Facebook: https://m.facebook.com/100049977400815/
Licensed under the  GPL-3.0 License
Coded By SITHUM KALHARA
*/

let DataPack = require('queen-sithu-pro');
let QueenSithu = require('queen-sithu-pro/sources/dc/handler');
let Details = require('queen-sithu-pro/sources/dc/Details');
let Language = DataPack.constdata
let WorkType = Details.WORKTYPE == 'public' ? false : true
let { MessageType, Mimetype} = require('@Sithuwa/queen-sithu-web');
let { sendMessageDownloader, sendMessageBrodcast, sendMessageAddBrodcast, downloadapkqueensithu, downloadtwitterqueensithu} = require('queen-sithu-pro/sources/dc/cmd/dl')
let { ytdocdlBackupForQueenSithu } = require('queen-sithu-pro/sources/dc/cmd/yt')
const Lang = Language.dataGet('scrapers')
var ytsd = require( 'yt-search' )
const translatte = require('translatte')


QueenSithu['IntroduceCMD']({
        pattern: 'mediafire ?(.*)', // Mediafire Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await sendMessageDownloader(QueenSithu, input, 'mediafire')
          } catch (e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Sorry I Could Not Find This Mediafire File!',MessageType.text, { quoted: QueenSithu.data})
                  }
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'insta ?(.*)',  // instagram Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await sendMessageDownloader(QueenSithu, input, 'insta')
                } catch (e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Sorry I Could Not Find This Insta Video!',MessageType.text, { quoted: QueenSithu.data})
              }
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'github ?(.*)',   // About Github Ptofile And Repo
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await sendMessageDownloader(QueenSithu, input, 'github')
                } catch (e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Sorry I Could Not Find This Profile!',MessageType.text, { quoted: QueenSithu.data})
                  }
})); 


QueenSithu['IntroduceCMD']({
        pattern: 'tiktok ?(.*)',   // Tiktok Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
await sendMessageDownloader(QueenSithu, input, 'tiktok')
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'url ?(.*)',     // Image To Url
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        if (QueenSithu.reply_message === false || QueenSithu.reply_message.image === false) return await QueenSithu.client.sendMessage(QueenSithu.jid,'Reply To Any Image...',MessageType.text);
        try {
await sendMessageDownloader(QueenSithu, input, 'imgurl')
        } catch (e) {
  if(e.message.includes('display')) {
     return await QueenSithu.client.sendMessage(QueenSithu.jid,'Your Imgbb APIKEY is invalid.. please add the api key ( api.imgbb.com )',MessageType.text)
     } else {
   return await QueenSithu.client.sendMessage(QueenSithu.jid,'Do Not Use Bot Here.. This Is Your Log Number',MessageType.text)
   }
  }
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'covid ?(.*)',   // Covid Info
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
await sendMessageDownloader(QueenSithu, input, 'covid')
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'trt ?(.*)',    // Language Translate
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        if (!QueenSithu.reply_message) {
            return await QueenSithu.client.sendMessage(QueenSithu.jid,Lang.NEED_REPLY,MessageType.text);
        }
        var langa;
        var langb;
        if(input[1].includes(' ')) {
   langa = input[1].split(' ')[0];
   langb = input[1].split(' ')[1];
   } else {
  langa = 'auto';
  langb = Details.LANG
 }
   
   
       let ceviri = await translatte(QueenSithu.reply_message.message, {from: langa, to: langb});
        if ('text' in ceviri) {
            return await QueenSithu.reply('*▶️ ' + Lang.LANG + ':* ```' + langa + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + langb + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await QueenSithu.client.sendMessage(QueenSithu.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'tts ?(.*)',   // Text To Audio
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
await sendMessageDownloader(QueenSithu, input, 'tts')
})); 


QueenSithu['IntroduceCMD']({
        pattern: 'wiki ?(.*)',  // Wikipedia Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
await sendMessageDownloader(QueenSithu, input, 'wiki')
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'img ?(.*)',  // Google Image Download With 10+ images
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
await sendMessageDownloader(QueenSithu, input, 'imgsend')
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'wallpaper ?(.*)',   // Hd Wallpaper Download With Search Option 100000000+
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
await sendMessageDownloader(QueenSithu, input, 'wallpaper')

})); 
QueenSithu['IntroduceCMD']({
        pattern: 'pint ?(.*)',    // Pinterest Download With Search Option 100000000+
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
await sendMessageDownloader(QueenSithu, input, 'pint')
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'yts ?(.*)',     // Youtube Search Engine
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
await sendMessageDownloader(QueenSithu, input, 'yts')
})); 
QueenSithu['IntroduceCMD']({
        pattern: 'lyric ?(.*)',     // Songs Lirics Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await sendMessageDownloader(QueenSithu, input, 'liric')
                } catch (e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Sorry I Could Not Find This Song!',MessageType.text, { quoted: QueenSithu.data})
                  }
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'twitter ?(.*)', // Twitter Video Download (HD / SD / AUDIO)
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
await sendMessageDownloader(QueenSithu, input, 'twitter')
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'gettv ?(.*)', // Twitter Video Download (HD / SD / AUDIO)
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await downloadtwitterQueenSithu(QueenSithu, input)
               } catch (e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Sorry I Could Not Find It!',MessageType.text, { quoted: QueenSithu.data})
                  }
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'ytv ?(.*)',      // Youtube Video Download  (144p / 240p / 360p / 420p / 720p / mp3)
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await sendMessageDownloader(QueenSithu, input, 'ytv')
              } catch (e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Sorry I Could Not Find This Video!',MessageType.text, { quoted: QueenSithu.data})
                  }
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'gitclone ?(.*)',    // Github Repo Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await sendMessageDownloader(QueenSithu, input, 'gitclone')
                } catch (e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Sorry I Could Not Find master Branch Of this Repo!\n\n Use Like This\n.gitclone RepoUrl/Branch',MessageType.text, { quoted: QueenSithu.data})
                  }
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'igprop ?(.*)',   // Instagram Profile Info
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await sendMessageDownloader(QueenSithu, input, 'igprop')
                } catch (e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Sorry I Could Not Find It!',MessageType.text, { quoted: QueenSithu.data})
                  }
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'fb ?(.*)',     // Facebook Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
await sendMessageDownloader(QueenSithu, input, 'facebook')
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'apk ?(.*)',   // Apksearch with apkmirror site
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
await sendMessageDownloader(QueenSithu, input, 'apksearch');
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'getapk ?(.*)',   // APK DOWNLOAD APKMIRRIR LINK
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await downloadapkQueenSithu(QueenSithu, input);
               } catch (e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Sorry I Could Not Find This Apk!',MessageType.text, { quoted: QueenSithu.data})
                  }
})); 

QueenSithu['IntroduceCMD']({
        pattern: 'playstore ?(.*)',   // Apk Search With Apk Mirrir Site
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await sendMessageDownloader(QueenSithu, input, 'playstoresearch');
                } catch (e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Sorry I Could Not Find Your Search!',MessageType.text, { quoted: QueenSithu.data})
                  }
})); 
QueenSithu['IntroduceCMD']({
        pattern: 'brodcast ?(.*)',    // Brodcast Without Making List (unlimited user add option)
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
if (input[1] == 'add') {
await sendMessageAddBrodcast(QueenSithu, input,'add')
} else if (input[1] == 'close') {
await sendMessageAddBrodcast(QueenSithu, input,'removeall')
} else if (input[1] == 'remove') {
await sendMessageAddBrodcast(QueenSithu, input,'removeone')
} else {
await sendMessageBrodcast(QueenSithu, input)
}
})); 
QueenSithu['IntroduceCMD']({
        pattern: 'sticker ?(.*)',   // Sticker Maker With Packname && Author Name
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
await sendMessageDownloader(QueenSithu, input, 'stickerwithpackname');
})); 
QueenSithu['IntroduceCMD']({
        pattern: 'ss ?(.*)',   //Site To Screenshot
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await sendMessageDownloader(QueenSithu, input, 'sitescreenshot');
                } catch (e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Sorry I Could Not Find This Site!',MessageType.text, { quoted: QueenSithu.data})
                  }
})); 
QueenSithu['IntroduceCMD']({
        pattern: 'spdf ?(.*)',   //Site To PDF
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await sendMessageDownloader(QueenSithu, input, 'sitepdf');
                } catch (e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Sorry I Could Not Find This Site!',MessageType.text, { quoted: QueenSithu.data})
                  }
})); 
QueenSithu['IntroduceCMD']({
        pattern: 'downimg ?(.*)',   //
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
await sendMessageDownloader(QueenSithu, input, 'imagedown');
})); 
QueenSithu['IntroduceCMD']({
        pattern: 'song ?(.*)',   // Youtube Song Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await sendMessageDownloader(QueenSithu, input, 'downsong');
                } catch (e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Sorry I Could Not Find This Song!',MessageType.text, { quoted: QueenSithu.data})
                  }
})); 
QueenSithu['IntroduceCMD']({
        pattern: 'video ?(.*)',   // Youtube Video Downloader
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await sendMessageDownloader(QueenSithu, input, 'downvideo');
                } catch (e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Sorry I Could Not Find! Try With Youtube URl',MessageType.text, { quoted: QueenSithu.data})
                  }
})); 
QueenSithu['IntroduceCMD']({
        pattern: 'ytd ?(.*)',   // helpers
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await sendMessageDownloader(QueenSithu, input, 'dlvid');
                } catch (e) {
                        try{
                        await ytdocdlBackupForQueenSithu(QueenSithu, input)
                              }  catch(e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Not Found This Youtube Video!',MessageType.text, { quoted: QueenSithu.data})
                  }}
})); 
QueenSithu['IntroduceCMD']({
        pattern: 'tikd ?(.*)', //helper
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await sendMessageDownloader(QueenSithu, input, 'dltik');
                } catch (e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Sorry I Could Not Find This Tiktok Video!',MessageType.text, { quoted: QueenSithu.data})
                  }
})); 
QueenSithu['IntroduceCMD']({
        pattern: 'dfb ?(.*)',   // helper
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSithu, input) => { 
        try {
await sendMessageDownloader(QueenSithu, input, 'dlfb');
                } catch (e) {
                  return await QueenSithu.client.sendMessage(QueenSithu.jid,'Sorry I Could Not Find This Facebook Video!',MessageType.text, { quoted: QueenSithu.data})
                  }
})); 
