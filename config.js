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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null"
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0789587448";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_53_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU1LFxuICAgICAgICAzNixcbiAgICAgICAgMjI2LFxuICAgICAgICA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk3LFxuICAgICAgICA4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDgwLFxuICAgICAgICA3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQyLFxuICAgICAgICA1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkzLFxuICAgICAgICA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDcxLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDU2LFxuICAgICAgICA1MSxcbiAgICAgICAgMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDU3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc4LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDksXG4gICAgICAgIDMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NCxcbiAgICAgICAgOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDc4LFxuICAgICAgICA0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDcwLFxuICAgICAgICA5MixcbiAgICAgICAgMTE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI1LFxuICAgICAgICA1NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwcmpaaUwzaWk2cGJQUzlQOVVLZWc5cUNtSENtTVExZy9Cakl2TGpON3RjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTc4OTU4NzQ0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDVCQjc5MzNBQTVCODFFQkJBQTNDNDBFQzlGRkE0RTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NjE2MzkxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJzOVdjNEh5UUhHVmFEcm4ybnRzb0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTA2MWU4MzMtOGFlYS00M2QxLWI0ZmItYzJlNmNiNGUwZjhmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDEyMCxcbiAgICAgIDI1MyxcbiAgICAgIDM1LFxuICAgICAgNjMsXG4gICAgICAxMDEsXG4gICAgICAyNTAsXG4gICAgICAyMjgsXG4gICAgICAxMTIsXG4gICAgICAxMjEsXG4gICAgICAyNyxcbiAgICAgIDk4LFxuICAgICAgMjE0LFxuICAgICAgMjQxLFxuICAgICAgMTkyLFxuICAgICAgMTAsXG4gICAgICAxMSxcbiAgICAgIDM4LFxuICAgICAgMTkwLFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOCxcbiAgICAgIDk4LFxuICAgICAgMTQ0LFxuICAgICAgMTM1LFxuICAgICAgNDksXG4gICAgICAxNDksXG4gICAgICAyMyxcbiAgICAgIDE5OSxcbiAgICAgIDIxNCxcbiAgICAgIDE5MixcbiAgICAgIDIxMixcbiAgICAgIDkxLFxuICAgICAgMjI4LFxuICAgICAgMTY0LFxuICAgICAgMjExLFxuICAgICAgMTQwLFxuICAgICAgMTg1LFxuICAgICAgMTA1LFxuICAgICAgNTcsXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFBaMUEyOTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc4OTU4NzQ0ODoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlJLwnZSx8J2UpfCdlKrwnZSe8J2UqyDwnZSF8J2UpvCdlKkg8J2UnPCdlJ7wnZSq8J2UpvCdlKtcIixcbiAgICBcImxpZFwiOiBcIjI1MzM1MTk2NzA4ODY4MToxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLUE1zcFlHRU1INXhiSUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitZZmx2OUJCekFWZWhRdlFaV1pUaHNIN2dBcmVqY1hGYlZtRHFKU2o4MDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibURUZi8vOTc0VVVydlRnVkRhSWt6c3F4cHhlczQ4TmMyNnJsMnpnRUNBWTVjRW5RaG1MYXEya01FZ1FtbExLTVZjZFhoODV6cmdNcVFLK3hPZmkzQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZTdjclBEWkk1Q21KREVjOTJoSkxrYm1yWUNyZFlKTGNHaU40bTBTRnFWaVZBMUQzU1IzT3R3VS8xMW5uaVE0Yld5b0ZSeE8rRlg3ckpuRkxyNmttQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Nzg5NTg3NDQ4OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NjE2Mzg4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRk1MXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGTUwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSWk02V0JZa05MSFhaWnJKZkpvVmtqbEZxVVhSV3dMZllpVVlUTkk5NXdRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NTc1NzkwNDMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
