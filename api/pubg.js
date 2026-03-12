module.exports = async function handler(req, res) {

try{

const id = req.query.id

const response = await fetch(
"https://api.bangjeff.com/v3/inquiry/account/pre-validate",
{
method:"POST",
headers:{
"Content-Type":"application/json",
"x-device-id":"6b24be2a71c2f04a081243513c6fe082",
"x-language":"id",
"Origin":"https://www.bangjeff.com",
"Referer":"https://www.bangjeff.com/",
"User-Agent":"Mozilla/5.0"
},
body:JSON.stringify({
product:{code:"PUBGM"},
account:{
userId:id,
region:"GLOBAL"
}
})
}
)

const text = await response.text()

let data
try{
data = JSON.parse(text)
}catch{
return res.json({
status:false,
message:"Blocked Cloudflare"
})
}

if(data?.data?.account){
return res.json({
status:true,
nickname:data.data.account.nickname,
region:data.data.account.region
})
}

return res.json({
status:false,
message:"ID tidak ditemukan"
})

}catch(err){
return res.json({
status:false,
error:err.message
})
}

}
