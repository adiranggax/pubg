export default async function handler(req, res) {

const id = req.query.id

if(!id){
return res.status(400).json({
status:false,
message:"Masukkan ID"
})
}

try{

const r = await fetch(
"https://bj-api.ourastore.com/v3/inquiry/account/pre-validate",
{
method:"POST",
headers:{
"Content-Type":"application/json",
"x-device-id":"c4707c0c7dbc84cc0a51d91378fba18d",
"x-language":"id",
"User-Agent":"Mozilla/5.0",
"Origin":"https://www.ourastore.com",
"Referer":"https://www.ourastore.com/"
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

const data = await r.json()

if(!data.error){
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

}catch(e){

return res.json({
status:false,
message:"Error server"
})

}

}status:true,
nickname:data.data.account.nickname,
region:data.data.account.region
})

}catch(e){

return res.status(500).json({
status:false,
message:"ID tidak ditemukan"
})

}

}
