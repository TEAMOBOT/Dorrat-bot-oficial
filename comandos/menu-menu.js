import moment from 'moment-timezone';
var handler = async (m, {  
      command, 
      conn, 
      args,  
      usedPrefix,  
      text
  }) => {  
    const d = new Date(new Date() + 3600000); 
   const locale = "es"; 
   const week = d.toLocaleDateString(locale, {weekday: "long"}); 
   const date = d.toLocaleDateString(locale, {day: "numeric", month: "long", year: "numeric"}); 
   const _uptime = process.uptime() * 1000; 
   const uptime = clockString(_uptime); 
   const {exp, limit, dolares, role} = global.db.data.users[m.sender]; 
   const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender; 
   const username = conn.getName(who); 
   let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
   const fload = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 2023, status: 1, surface : 1, message: '[ 𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 𝐌𝐄𝐍𝐔... ]', orderTitle: `▮Menu ▸`, thumbnail: await (await fetch(pp)).buffer(), sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
   const db = "./galeria/menudorrat3.jpg"
  
if (command == "menu" || command == "menú") {
let uwu = `—————————×∆×———————————
┃│⋟ *${ucapan()}*
┃│⋟ *tenemos varios tipos de menus*
┃│⋟ 1
┃│⋟ *#menucompleto*
┃│⋟ 2
┃│⋟ *#descargasmenu*
┃╰══ ⪨`

await conn.sendMessage(m.chat, {   
  text: uwu,  
  contextInfo:{  
  forwardingScore: 9999999,  
  isForwarded: true,   
  mentionedJid:[m.sender],  
  "externalAdReply": {  
  "showAdAttribution": true,  
  "containsAutoReply": true,
  "renderLargerThumbnail": true,  
  "title": wm,   
  "containsAutoReply": true,  
  "mediaType": 1,   
  "thumbnail": fotogodzx,  
  "mediaUrl": `https://chat.whatsapp.com/CMABi78Vd9xH8aNF73eE2x`,  
  "sourceUrl": `https://chat.whatsapp.com/CMABi78Vd9xH8aNF73eE2x`  
  }  
  }  
  }, { quoted: m })
}  
if (command == "menucompleto" || command == "allmenu") {
await m.reply(`[ 𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 𝐌𝐄𝐍𝐔... ]`);                 
var completomenu = `*╭━━❍𝐁𝐨𝐭𝐀𝐱𝐱𝐜❍━━╮* 
 *┣━━━▢ ❤𝐇𝐎𝐋𝐀, ${username}❤*• 
 *┃╭━━━━━━━━━━━━━━━━╾•* 
 *┃┃  ❍ ${ucapan()} ❍* 
 *┃┣━━━━━━━━━━━━━━━━╾•* 
 *┃┃ ⋄ ADQUIRIR BOT A: wa.me/8123422244   (𝐍𝐎 𝐁𝐎𝐓)* 
 *┃┃ ⋄ VERSION » ${vs}* 
 *┃┃ ⋄ FECHA » ${week}, ${date}* 
 *┃┃ ⋄ TIEMPO ACTIVO » ${uptime}* 
 *┃┃ ⋄ LIBRERIA » ${library}* 
 *┃┃ ⋄ USUARIOS » ${Object.keys(global.db.data.users).length}* 
 *┃╰━━━━━━━━━━━━━━━━╾* 
 
  
 ▧ 「 *I N F O R M A C I O N* 「「
 ‣ Comando: ${usedPrefix}estado
 ‣ Descripción: Mirar el estado del bot
 ‣ Comando: ${usedPrefix}owner
 ‣ Descripción: Información sobre el creador
 ‣ comando: _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜) 
 ‣ Descripción: info del bot
 └──···

 ╔═════════════╗  
 ║ *<COMPRA UN BOT A TU GRUPO/>* 
 ║══════════════════ 
 ║ ➱_${usedPrefix}join *link del grupo*_  
 ║ ➱_*minimo 30 miembros*_ 
 ╚════ ≪ 𖡽𖡽 ≫ ════╝ 
  

  ┗─━─━─━∞𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 ∞━─━─━─┛「💻」 
 𖥥𖥳 Comando: ${usedPrefix}modapk
 𖥥jemplo: ${usedPrefix}modapk Facebook 
 𖥥𖥳Comando: ${usedPrefix}videodocumento
 𖥥ejemplo: *${usedPrefix}videodocumento <enlace>*
 𖥥𖥳Comando: ${usedPrefix}fb
 𖥥ejemplo: *${usedPrefix}fb <link>*
 𖥥𖥳Comando: ${usedPrefix}twitter 
 𖥥ejemplo: *${usedPrefix}Twitter <link>*_
 𖥥𖥳Comando: ${usedPrefix}xnxxdl
 𖥥Ejemplo: ${usedPrefix}xnxxdl *<enlace / link / url>*
 𖥥𖥳Comando: ${usedPrefix}instagram
 𖥥ejemplo: *${usedPrefix}ig <enlace / link / url*
 𖥥𖥳Comando: ${usedPrefix}mediafire
 𖥥Ejemplo: ${usedPrefix}Mediafire <enlace / link / url 
 𖥥𖥳Comando: ${usedPrefix}gdrive 
 𖥥Ejemolo: ${usedPrefix}gdrive *<enlace / link / url>*
 𖥥𖥳Comando: ${usedPrefix}tiktok 
 𖥥ejemplo:${usedPrefix}Tintok *<enlace / link / url*
 𖥥𖥳Comando: ${usedPrefix}ytmp3
 𖥥Ejemplo: ${usedPrefix}ytmp3 *<enlace / link / url* 
 𖥥𖥳Comando: ${usedPrefix}video
 𖥥Ejemplo: ${usedPrefix}video <enlace / link / url 
 𖥥𖥳Comando${usedPrefix}play.1 
 𖥥Ejemplo: ${usedPrefix}play.1 <texto / enlace / link / url 
 𖥥𖥳Comando: ${usedPrefix}play.2 
 𖥥Ejemplo: ${usedPrefix}play.2 <texto / enlace / link / url 
 𖥥𖥳Comando: ${usedPrefix}musica
 𖥥Ejemplo: ${usedPrefix}musica <texto 
 𖥥𖥳Comando: ${usedPrefix}spotify 
 𖥥Ejemplo: ${usedPrefix}spotify *texto*
 𖥥𖥳Comando: ${usedPrefix}imagen 
 𖥥Ejemplo: ${usedPrefix}spotify *texto*
 𖥥𖥳Comando: ${usedPrefix}pinteret *texto*
 𖥥𖥳Comando: ${usedPrefix}wallpaper 
 𖥥Ejemplo: ${usedPrefix}wallpaper *texto*
 𖥥𖥳Comando ${usedPrefix}wallpaper2 <texto 
 𖥥Ejemplo: ${usedPrefix}pptiktok <nombre de usuario 
 𖥥𖥳${usedPrefix}igstalk <nombre de usuario 
 𖥥𖥳${usedPrefix}igstory *<nombre de usuario>*_
 𖥥𖥳${usedPrefix}tiktokstalk <nombre de usuario 
 └────ׂ─ׂ─ׂ─ׂ── 
┗─━─━──━─━∞◆∞━─━─━─━─━─┛
• - - - - - -RPG- - - - - - •
 𖡽 ${usedPrefix}cazar a 
 𖡽 ${usedPrefix}aventura 
 𖡽 ${usedPrefix}balance 
 𖡽 ${usedPrefix}claim 
 𖡽 ${usedPrefix}top 
 𖡽 ${usedPrefix}heal 
 𖡽 ${usedPrefix}cartera 
 𖡽 ${usedPrefix}inventory  
 𖡽 ${usedPrefix}levelup 
 𖡽 ${usedPrefix}myns 
 𖡽 ${usedPrefix}perfil 
 𖡽 ${usedPrefix}work 
 𖡽 ${usedPrefix}rob <@tag 
 𖡽 ${usedPrefix}minar 
 𖡽 ${usedPrefix}buy 
 𖡽 ${usedPrefix}minardiamantes  
 𖡽 ${usedPrefix}minardorracoins  
 𖡽 ${usedPrefix}transfer <tipo> <cantidad> <@tag 
 𖡽 ${usedPrefix}verificar 
 𖡽 ${usedPrefix}unreg <numero de serie> 
 • - - - - - - ☆- - - - - - •
  
 ╔═════ GAMES ═════╗  
 ║ ❒ ${usedPrefix}es facil 
 ║ ❒ ${usedPrefix}suitpvp <@tag> 
 ║ ❒ ${usedPrefix}mates <noob / easy / medium / hard / extreme /impossible /impossible2> 
 ║ ❒ ${usedPrefix}ppt <papel / tijera /piedra 
 ║ ❒ ${usedPrefix}prostituto <nombre / @tag 
 ║ ❒ ${usedPrefix}prostituta <nombre / @tag 
 ║ ❒ ${usedPrefix}hetero <nombre / @tag 
 ║ ❒ ${usedPrefix}gay2 <nombre / @tag 
 ║ ❒ ${usedPrefix}lesbiana <nombre / @tag 
 ║ ❒ ${usedPrefix}pajero <nombre / @tag 
 ║ ❒ ${usedPrefix}pajera <nombre / @tag 
 ║ ❒ ${usedPrefix}puto <nombre / @tag 
 ║ ❒ ${usedPrefix}puta <nombre / @tag 
 ║ ❒ ${usedPrefix}manco <nombre / @tag 
 ║ ❒ ${usedPrefix}manca <nombre / @tag 
 ║ ❒ ${usedPrefix}rata <nombre / @tag 
 ║ ❒ ${usedPrefix}love <nombre / @tag 
 ║ ❒ ${usedPrefix}doxear <nombre / @tag 
 ║ ❒ ${usedPrefix}pregunta <texto 
 ║ ❒ ${usedPrefix}slot <apuesta 
 ║ ❒ ${usedPrefix}simi <texto 
 ║ ❒ ${usedPrefix}topgays 
 ║ ❒ ${usedPrefix}topotakus 
 ║ ❒ ${usedPrefix}formarpareja 
 ║ ❒ ${usedPrefix}formarpareja5  
 ║ ❒ ${usedPrefix}amistad 
 ║ ❒ ${usedPrefix}verdad 
 ║ ❒ ${usedPrefix}reto 
 ╚════ ≪ •❈• ≫ ════╝ 
  
 ╔═════ ENABLE/DISABLE ═════╗  
 ║ ❒ ${usedPrefix}enable *welcome*_ 
 ║ ❒ ${usedPrefix}disable *welcome*_ 
 ║ ❒ ${usedPrefix}enable *modohorny*_ 
 ║ ❒ ${usedPrefix}disable *_modohorny* 
 ║ ❒ ${usedPrefix}enable *antilink*_ 
 ║ ❒ ${usedPrefix}disable *antilink*_ 
 ║ ❒ ${usedPrefix}enable *antilink2*_ 
 ║ ❒ ${usedPrefix}disable *antilink2*_ 
 ║ ❒ ${usedPrefix}enable *detect*_ 
 ║ ❒ ${usedPrefix}disable *detect*_ 
 ║ ❒ ${usedPrefix}enable *audios*_ 
 ║ ❒ ${usedPrefix}disable *audios*_ 
 ║ ❒ ${usedPrefix}enable *autosticker*_ 
 ║ ❒ ${usedPrefix}disable *autosticker*_ 
 ║ ❒ ${usedPrefix}enable *antiviewonce*_  
 ║ ❒ ${usedPrefix}enable *antitraba*_ 
 ║ ❒ ${usedPrefix}disable *antitraba*_ 
 ║ ❒ ${usedPrefix}enable *antiArab*_ 
 ║ ❒ ${usedPrefix}disable *antiArab*_ 
 ║ ❒ ${usedPrefix}enable *simi*_ 
 ║ ❒ ${usedPrefix}disable *simi*_ 
 ║ ❒ ${usedPrefix}enable *modoadmin*_ 
 ║ ❒ ${usedPrefix}disable *modoadmin*_ 
 ║ ❒ ${usedPrefix}enable *temporal*_ 
 ║ ❒ ${usedPrefix}disable *temporal*_ 
 ╚════ ≪ •❈• ≫ ════╝ 
  
 ┌──「🏢𝐆𝐑𝐎𝐔𝐏」─ 
 ├➢${usedPrefix}add *<número>* 
 ├➢${usedPrefix}kick *<@tag>*_ 
 ├➢${usedPrefix}kick2 *<@tag>*_ 
 ├➢${usedPrefix}listanum *<texto>*_ 
 ├➢${usedPrefix}kicknum *<texto>*_ 
 ├➢${usedPrefix}resetlink 
 ├➢${usedPrefix}encuesta *<texto> 
 ├➢${usedPrefix}votar *<texto>* 
 ├➢${usedPrefix}listadv 
 ├➢${usedPrefix}deladvertencia <@tag 
 ├➢${usedPrefix}advertencia <@tag 
 ├➢${usedPrefix}grouptime *<opcion> <tiempo>*_ 
 ├➢${usedPrefix}grupo <abrir / cerrar 
 ├➢${usedPrefix}promote <@tag 
 ├➢${usedPrefix}demote <@tag 
 ├➢${usedPrefix}banchat 
 ├➢${usedPrefix}unbanchat 
 ├➢admins *<texto>_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜) 
 ├➢${usedPrefix}demote <@tag 
 ├➢${usedPrefix}infogroup 
 ├➢${usedPrefix}link 
 ├➢${usedPrefix}setname <texto 
 ├➢${usedPrefix}setdesc <texto 
 ├➢${usedPrefix}invocar <texto 
 ├➢${usedPrefix}setwelcome <texto 
 ├➢${usedPrefix}setbye <texto 
 ├➢${usedPrefix}hidetag <texto 
 ├➢${usedPrefix}simular <welcome / bye / promote / demote> 
 ├➢${usedPrefix}destraba  
 └────ׂ─ׂ─ׂ─ׂ─── 
  
  
 ┌──「🎑𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒」 
 ├➢_${usedPrefix}togifaud *<responde a un video>*_ 
 ├➢_${usedPrefix}toimg *<responde a un sticker>*_ 
 ├➢_${usedPrefix}tomp3 *<responde a un video / nota de voz>*_ 
 ├➢_${usedPrefix}toptt *<responde a un video / audio>*_ 
 ├➢_${usedPrefix}tovideo *<responde a un sticker>*_ 
 ├➢_${usedPrefix}tourl *<responde a un video / imagen / audio>*_ 
 ├➢_${usedPrefix}tts es *<texto>*_ 
 └────ׂ─ׂ─ׂ─ׂ─── 
  
 ┌──「📑𝐋𝐎𝐆𝐎𝐒」─ 
 ├➢${usedPrefix}logos <efecto <texto 
 ├➢${usedPrefix}simpcard <@tag 
 ├➢${usedPrefix}hornycard <@tag 
 ├➢${usedPrefix}lolice <@tag 
 ├➢${usedPrefix}ytcomment <texto 
 ├➢${usedPrefix}itssostupid 
 ├➢${usedPrefix}pixelar 
 ├➢${usedPrefix}blur 
 └────ׂ─ׂ─ׂ─ׂ─── 
  
  
 ┌──「🌹𝐅𝐫𝐚𝐬𝐞𝐬 𝐲 𝐭𝐞𝐱𝐭𝐨𝐬」─ 
 ├➢_${usedPrefix}piropo_ 
 ├➢_${usedPrefix}consejo_ 
 ├➢_${usedPrefix}fraseromantica_ 
 ├➢_${usedPrefix}historiaromantica_ 
 └────ׂ─ׂ─ׂ─ׂ── 
  
 ┌──「⛩️𝐀𝐍𝐈𝐌𝐄𝐒」─ 
 ├➢${usedPrefix}cristianoronaldo 
 ├➢${usedPrefix}messi 
 ├➢${usedPrefix}meme 
 ├➢${usedPrefix}itzy 
 ├➢${usedPrefix}blackpink 
 ├➢${usedPrefix}kpop <blackpink / exo / bts 
 ├➢${usedPrefix}lolivid 
 ├➢${usedPrefix}loli 
 ├➢${usedPrefix}navidad 
 ├➢${usedPrefix}ppcouple 
 ├➢${usedPrefix}neko 
 ├➢${usedPrefix}waifu 
 ├➢${usedPrefix}akira 
 ├➢${usedPrefix}akiyama 
 ├➢${usedPrefix}anna 
 ├➢${usedPrefix}asuna 
 ├➢${usedPrefix}ayuzawa 
 ├➢${usedPrefix}boruto 
 ├➢${usedPrefix}chiho 
 ├➢${usedPrefix}chitoge 
 ├➢${usedPrefix}deidara 
 ├➢${usedPrefix}erza 
 ├➢${usedPrefix}elaina 
 ├➢${usedPrefix}eba 
 ├➢${usedPrefix}emilia 
 ├➢${usedPrefix}hestia 
 ├➢${usedPrefix}hinata 
 ├➢${usedPrefix}inori 
 ├➢${usedPrefix}isuzu 
 ├➢${usedPrefix}itachi 
 ├➢${usedPrefix}itori 
 ├➢${usedPrefix}kaga 
 ├➢${usedPrefix}kagura 
 ├➢${usedPrefix}kaori 
 ├➢${usedPrefix}keneki 
 ├➢${usedPrefix}kotori 
 ├➢${usedPrefix}kurumi 
 ├➢${usedPrefix}madara 
 ├➢${usedPrefix}mikasa 
 ├➢${usedPrefix}miku 
 ├➢${usedPrefix}minato 
 ├➢${usedPrefix}naruto 
 ├➢${usedPrefix}nezuko 
 ├➢${usedPrefix}sagiri 
 ├➢${usedPrefix}sasuke 
 ├➢${usedPrefix}sakura 
 ├➢${usedPrefix}cosplay 
 └────ׂ─ׂ─ׂ─ׂ─── 
 
 ┌──「🔞𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 +𝟏𝟖」 
 ├➢_${usedPrefix}pack_ 
 ├➢_${usedPrefix}pack2_ 
 ├➢_${usedPrefix}pack3_ 
 ├➢_${usedPrefix}videoxxx_ 
 ├➢_${usedPrefix}videolesbixxx_ 
 ├➢_${usedPrefix}tetas_ 
 ├➢_${usedPrefix}booty_ 
 ├➢_${usedPrefix}ecchi_ 
 ├➢_${usedPrefix}furro_ 
 ├➢_${usedPrefix}imagenlesbians_ 
 ├➢_${usedPrefix}pussy_
 ├➢_${usedPrefix}panties_ 
 ├➢_${usedPrefix}pene_ 
 ├➢_${usedPrefix}porno_ 
 ├➢_${usedPrefix}randomxxx_ 
 ├➢_${usedPrefix}pechos_ 
 ├➢_${usedPrefix}yuri_ 
 ├➢_${usedPrefix}yuri2_ 
 ├➢_${usedPrefix}trapito_ 
 ├➢_${usedPrefix}hentai_ 
 ├➢_${usedPrefix}nsfwloli_ 
 ├➢_${usedPrefix}nsfworgy_ 
 ├➢_${usedPrefix}nsfwfoot_ 
 ├➢_${usedPrefix}nsfwass_ 
 ├➢_${usedPrefix}nsfwbdsm_ 
 ├➢_${usedPrefix}nsfwcum_ 
 ├➢_${usedPrefix}nsfwero_ 
 ├➢_${usedPrefix}nsfwfemdom_ 
 ├➢_${usedPrefix}nsfwglass_ 
 ├➢_${usedPrefix}hentaipdf *<texto>*_ 
 ├➢_${usedPrefix}hentaisearch *<texto>*_ 
 └────ׂ─ׂ─ׂ─ׂ─── 
  
 ┌──「𝐄𝐟𝐞𝐜𝐭𝐨𝐬 𝐝𝐞 𝐚𝐮𝐝𝐢𝐨𝐬」 
 ├➢*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉* 
 ├➢_${usedPrefix}bass_ 
 ├➢_${usedPrefix}blown_ 
 ├➢_${usedPrefix}deep_ 
 ├➢_${usedPrefix}earrape_ 
 ├➢_${usedPrefix}fast_ 
 ├➢_${usedPrefix}fat_ 
 ├➢_${usedPrefix}nightcore_ 
 ├➢_${usedPrefix}reverse_ 
 ├➢_${usedPrefix}robot_ 
 ├➢_${usedPrefix}slow_ 
 ├➢_${usedPrefix}smooth_ 
 ├➢_${usedPrefix}tupai_ 
 └────ׂ─ׂ─ׂ─ׂ── 
  
 ┌「◾𝐂𝐡𝐚𝐭 𝐚𝐧𝐨𝐧𝐢𝐦𝐨」 
 ├➢_${usedPrefix}start_ 
 ├➢_${usedPrefix}next_ 
 ├➢_${usedPrefix}leave_ 
 └────ׂ─ׂ─ׂ─ׂ── 
  
 ┌「🔍𝐁𝐮𝐬𝐜𝐚𝐫」 
 ├➢_${usedPrefix}wattpad <*texto*>
 ├➢_${usedPrefix}server IP \ puerto 
 ├➢_${usedPrefix}apkpure <*texto*> 
 ├➢_${usedPrefix}covid <*país*> 
 ├➢_${usedPrefix}playstore <*texto*> 
 ├➢_${usedPrefix}stickersearch *<texto>*_ 
 ├➢_${usedPrefix}xnxxsearch *<texto>*_ 
 ├➢_${usedPrefix}animeinfo *<texto>*_ 
 ├➢_${usedPrefix}google *<texto>*_ 
 ├➢_${usedPrefix}letra *<texto>*_ 
 ├➢_${usedPrefix}wikipedia *<texto>*_ 
 ├➢_${usedPrefix}ytsearch *<texto>*_ 
 ├➢_${usedPrefix}apkdone *<texto>*_ 
 ├➢_${usedPrefix}apkgoogle *<texto>*_ 
 ├➢_${usedPrefix}apkmody *<texto>*_ 
 ├➢_${usedPrefix}apkshub *<texto>*_ 
 ├➢_${usedPrefix}happymod *<texto>*_ 
 ├➢_${usedPrefix}hostapk *<texto>*_ 
 ├➢_${usedPrefix}revdl *<texto>*_ 
 ├➢_${usedPrefix}toraccino *<texto>*_ 
 ├➢_${usedPrefix}uapkpro *<texto>*_ 
 └────ׂ─ׂ─ׂ─ׂ── 
  
 ┌「🎵𝐀𝐔𝐃𝐈𝐎𝐒」 
 ├➢_𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .) 
 ├➢_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_ 
 ├➢_Quien es tu sempai botsito 7w7_ 
 ├➢_Te diagnostico con gay_ 
 ├➢_A nadie le importa_ 
 ├➢_Fiesta del admin_ 
 ├➢_Fiesta del administrador_  
 ├➢_Vivan los novios_ 
 ├➢_Feliz cumpleaños_ 
 ├➢_No digas mamadas Mariyein_ 
 ├➢_Noche de paz_ 
 ├➢_Buenos dias_ 
 ├➢_Cambiate a Movistar  
 ├➢_Bienvenido_ 
 ├➢_Calla fan de bts_ 
 ├➢_Las reglas del grupo_ 
 ├➢_Buenos tardes_ 
 ├➢_Buenos noches_ 
 ├➢_Audio hentai_ 
 ├➢_Chica lgante_ 
 ├➢_Feliz navidad_ 
 ├➢_Vete a la vrg_ 
 ├➢_Pasa pack Bot_ 
 ├➢_Atencion grupo_ 
 ├➢_Marica quien_ 
 ├➢_Murio el grupo_ 
 ├➢_Oh me vengo_ 
 ├➢_tio que rico_ 
 ├➢_Viernes_ 
 ├➢_Baneado_ 
 ├➢_Sexo_ 
 ├➢_Hola_ 
 ├➢_Un pato_ 
 ├➢_Nyanpasu_ 
 ├➢_Te amo_ 
 ├➢_Yamete_ 
 ├➢_Bañate_ 
 ├➢_Es puto_ 
 ├➢_La biblia_ 
 ├➢_Onichan_ 
 ├➢_Mierda de Bot_ 
 ├➢_Siuuu_ 
 ├➢_Epico_ 
 ├➢_Shitpost_ 
 ├➢_Rawr_ 
 ├➢_UwU_ 
 ├➢_:( 
 ├➢_a_ 
 └────ׂ─ׂ─ׂ─ׂ── 
  
  
 ┌──「🛠️𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒」─ 
 ├➢_${usedPrefix}inspect *<link del grupo>*_ 
 ├➢_${usedPrefix}ofuscar *<código>*_ 
 ├➢_${usedPrefix}reenviar *<responder a un mensaje>*_ 
 ├➢_${usedPrefix}copy *<texto>*_ 
 ├➢_${usedPrefix}chatgpt *<texto>*_ 
 ├➢_${usedPrefix}morse *<texto>*_ 
 ├➢_${usedPrefix}captura *<link de la página>*_ 
 ├➢_${usedPrefix}horario_ 
 ├➢_${usedPrefix}encuestas texto|texto_ 
 ├➢_${usedPrefix}afk *<motivo>*_ 
 ├➢_${usedPrefix}ocr *<responde a imagen>*_ 
 ├➢_${usedPrefix}tamaño *<cantidad> <responde a imagen / video>*_ 
 ├➢_${usedPrefix}acortar *<enlace / link / url>*_ 
 ├➢_${usedPrefix}calc *<operacion math>*_ 
 ├➢_${usedPrefix}del *<respondre a mensaje del Bot>*_ 
 ├➢_${usedPrefix}whatmusic *<responde a un audio>*_ 
 ├➢_${usedPrefix}qrcode *<texto>*_ 
 ├➢_${usedPrefix}readmore *<texto1| texto2>*_ 
 ├➢_${usedPrefix}spamwa *<numero|texto|cantidad>*_ 
 ├➢_${usedPrefix}styletext *<texto>*_ 
 ├➢_${usedPrefix}traducir *<texto>*_ 
 ├➢_${usedPrefix}nowa *<numero>*_ 
 └────ׂ─ׂ─ׂ─ׂ─── 
  
 ┌──「🌌𝐒𝐓𝐈𝐂𝐊𝐄𝐑」─ 
 ├➢_${usedPrefix}sticker *<responder a imagen o video>*_ 
 ├➢_${usedPrefix}sticker *<enlace / link / url>*_ 
 ├➢_${usedPrefix}s *<responder a imagen o video>*_ 
 ├➢_${usedPrefix}s *<enlace / link / url>*_ 
 ├➢_${usedPrefix}sfull *<responder a imagen o video>*_ 
 ├➢_${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_ 
 ├➢_${usedPrefix}scircle *<responder a imagen>*_ 
 ├➢_${usedPrefix}sremovebg *<responder a imagen>*_ 
 ├➢_${usedPrefix}semoji *<tipo> <emoji>*_ 
 ├➢_${usedPrefix}attp *<texto>*_ 
 ├➢_${usedPrefix}attp2 *<texto>*_ 
 ├➢_${usedPrefix}attp3 *<texto>*_ 
 ├➢_${usedPrefix}ttp *<texto>*_ 
 ├➢_${usedPrefix}ttp2 *<texto>*_ 
 ├➢_${usedPrefix}ttp3 *<texto>*_ 
 ├➢_${usedPrefix}ttp4 *<texto>*_ 
 ├➢_${usedPrefix}ttp5 *<texto>*_ 
 ├➢_${usedPrefix}pat *<@tag>*_ 
 ├➢_${usedPrefix}slap *<@tag>*_ 
 ├➢_${usedPrefix}kiss *<@tag>*_ 
 ├➢_${usedPrefix}dado_ 
 ├➢_${usedPrefix}wm *<packname> <author>*_ 
 ├➢_${usedPrefix}stickermarker *<efecto> <responder a imagen>*_ 
 ├➢_${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_  
 └────ׂ─ׂ─ׂ─ׂ─── 
  
 ┣━━━❰･ *OWNER 👑* ･❱━━━┫ 
 ❀••►☪︎ PARA VER LOS COMANDOS DE OWNER USE: 
 ❀••►☪︎ ${usedPrefix}soloparaelpropietario 
 𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄 

  ╔═════ REPORTAR ═════╗  
 ║ ❒ _*Reporta con este comando de haber*_ 
 ║ ❒ _*Fallas para poder Solucionar!!*_ 
 ║════════════════════════ 
 ║︎ ❒ _${usedPrefix}reporte *texto*_ 
 ║ ❒ _${usedPrefix}report *texto*_ 
 ╚════ ≪ •❈• ≫ ════╝ 
  
 ─━─━─━∞◆∞━─━─━─ 
 ❒ 𝐁𝐨𝐭𝐀𝐱𝐱𝐜-𝐌𝐃       
 ❒ 𝐁𝐘 𝙰𝚇𝙸𝙴𝙻-𝐎𝐅𝐂        
┗─━─━─━∞◆∞━─━─━─┛
 `.trim();
 await  conn.sendMessage(m.chat,{ image:{ url:"https://telegra.ph/file/dde9bd1f999297449d139.jpg", }, caption: completomenu, 
contextInfo: { mentionedJid: [m.sender], externalAdReply: { title: `MENU - COMPLETO`, 
sourceUrl: "http://paypal.me/DorratBotOficial", mediaType: 1, showAdAttribution: true, thumbnailUrl: "https://telegra.ph/file/dde9bd1f999297449d139.jpg", 
}, }, }, { quoted: m,});}};
         
  handler.command = [
  "menu",
  "menú",
  "menucompleto",
  "allmenu"
  ];
  handler.tags = ["internet"]  
  export default handler 
  
  function clockString(ms) { 
   const h = isNaN(ms) ? "--" : Math.floor(ms / 3600000); 
   const m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60; 
   const s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60; 
   return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":"); 
 } 
  
 function ucapan() { 
   const time = moment.tz("America/Los_Angeles").format("HH"); //America/Los_Angeles  Asia/Jakarta   America/Toronto 
  
   var res = "🌉Buenas madrugadas"; 
  
   if (time >= 4) { 
     res = "🌇Buenos Días"; 
   } 
  
   if (time >= 11) { 
     res = "🏙️Buenas Tardes"; 
   } 
  
   if (time >= 15) { 
     res = "🌆Buenas tardes"; 
   } 
  
   if (time >= 17) { 
     res = "🌃Buenas noches"; 
   } 
  
   return res; 
 }
