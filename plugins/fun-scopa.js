
let handler = async (m, { conn, command, text }) => {
if (!text) throw `Tagga chi desideri scopare di brutto 🥵🤤`
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
conn.reply(m.chat, `
*𝗦𝗧𝗔𝗜 𝗙𝗢𝗧𝗧𝗘𝗡𝗗𝗢 ${text} !*

𝘵𝘪 𝘴𝘵𝘢𝘯𝘯𝘰 𝘧𝘰𝘵𝘵𝘦𝘯𝘥𝘰 𝘱𝘦𝘳 𝘣𝘦𝘯𝘦, 𝘵𝘪 𝘴𝘦𝘪 𝘷𝘰𝘭𝘶𝘵𝘢 𝘧𝘢𝘳 𝘴𝘤𝘰𝘱𝘢𝘳𝘦 𝘥𝘢 𝘵𝘳𝘰𝘪𝘢 𝘦 𝘰𝘳𝘢 𝘵𝘪 𝘨𝘰𝘥𝘪 𝘲𝘶𝘦𝘴𝘵𝘰 𝘣𝘦𝘭 𝘤𝘢𝘻𝘻𝘰 𝘯𝘦𝘭 𝘤𝘶𝘭𝘰, 𝘴𝘦𝘪 𝘱𝘪𝘦𝘯𝘢 𝘧𝘪𝘯𝘰 𝘢𝘭𝘭'𝘰𝘳𝘭𝘰 𝘦 𝘯𝘰𝘯 𝘳𝘪𝘦𝘴𝘤𝘪 𝘢 𝘮𝘶𝘰𝘷𝘦𝘳𝘵𝘪, 𝘵𝘪 𝘴𝘦𝘪 𝘧𝘢𝘵𝘵𝘢 𝘴𝘣𝘢𝘵𝘵𝘦𝘳𝘦 𝘪𝘯 𝘵𝘶𝘵𝘵𝘦 𝘭𝘦 𝘱𝘰𝘴𝘪𝘻𝘪𝘰𝘯𝘪 𝘰𝘳𝘢 𝘻𝘪𝘵𝘵𝘢 𝘱𝘶𝘵𝘵𝘢𝘯𝘢
*${text}* 
🤤🥵 *¡𝐓𝐈 𝐇𝐀𝐍𝐍𝐎 𝐒𝐂𝐎𝐏𝐀𝐓𝐎 𝐏𝐄𝐑 𝐁𝐄𝐍𝐄 𝐙𝐎𝐂𝐂𝐎𝐋𝐀!* 🥵🤤`, null, { mentions: [user] })
}

handler.customPrefix = /scopa/i
handler.admin = true
handler.command = new RegExp
export default handler
