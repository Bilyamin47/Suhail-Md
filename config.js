const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_59_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDU2LFxuICAgICAgICAzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDU5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk4LFxuICAgICAgICA2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA0LFxuICAgICAgICAzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI1LFxuICAgICAgICA3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUxLFxuICAgICAgICA1NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5NUhURTByZkNZUkNGNGRYWGZWcmd6c2ZiMU1FMjBLbjQ3QTMxM2VKSVdBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTc4OTU4NzQ0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDIzQ0M4QjBENzRBOTg1NDJBQjlCREZCMDJBNDVGNDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNTAxOTg4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1Nzg5NTg3NDQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQTFFQkUxREJEQjlDRTc0QTIwQkVFRkRCNUEwRkFCMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1MDE5ODlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieFpNRkFXVTdRMktEUHJKSkU3bnhMQVwiLFxuICBcInBob25lSWRcIjogXCI0Y2QwOGFiMy0wZTc5LTRlNzctYmEzMS0yZGQxYmUxYTNiYWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMTc1LFxuICAgICAgOCxcbiAgICAgIDE3MyxcbiAgICAgIDI0NyxcbiAgICAgIDE1MyxcbiAgICAgIDEzNixcbiAgICAgIDM1LFxuICAgICAgMTYsXG4gICAgICAxMDAsXG4gICAgICAxMDEsXG4gICAgICAxMjcsXG4gICAgICA0MixcbiAgICAgIDIzMyxcbiAgICAgIDkwLFxuICAgICAgMTE0LFxuICAgICAgMjcsXG4gICAgICAxODIsXG4gICAgICAxNjIsXG4gICAgICAxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDExOCxcbiAgICAgIDE0MSxcbiAgICAgIDE1LFxuICAgICAgMTUsXG4gICAgICAxNjcsXG4gICAgICAxOTEsXG4gICAgICA1NCxcbiAgICAgIDQ4LFxuICAgICAgMjIxLFxuICAgICAgMTMyLFxuICAgICAgMTMxLFxuICAgICAgNjUsXG4gICAgICAxOTUsXG4gICAgICAxMDEsXG4gICAgICAxMzMsXG4gICAgICAyNDgsXG4gICAgICA0NCxcbiAgICAgIDE3NyxcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZUTDdFVzdMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3ODk1ODc0NDg6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZSS8J2UsfCdlKXwnZSq8J2UnvCdlKsg8J2UhfCdlKbwnZSpIPCdlJzwnZSe8J2UqvCdlKbwnZSrXCIsXG4gICAgXCJsaWRcIjogXCIyNTMzNTE5NjcwODg2ODE6NDZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSy9Nc3BZR0VKNlM4TFFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrWWZsdjlCQnpBVmVoUXZRWldaVGhzSDdnQXJlamNYRmJWbURxSlNqODA4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJRTDdOa2ZaN0hWektZeUFQLzV0aktkTWdqemdCbFRqbTBTNjZQL1Bpd255RWQrSldqUmUwU0EybjJ0YXQ2WmdOZWJxUEN5MHJHWE9GeHEwR25jVUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxaWjBZcG5aYWhoSTVKeTBJd0YwbFFKeU5nVThBQ0x2cjl2ZWdHOVlBUHAvR1NsODcrSURzUzhFeDlxT2NkYXFXTWpkbHlNTkZEcEJQa2NIK0ZlNmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc4OTU4NzQ0ODo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTUwMTk4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURBSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREFJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNjZ1Sktnc000Q2drSG5pbEY1VkNYQmxRRmJTN1JJZG5leEFPR0pmb1JiUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjU3NTc5MDUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
