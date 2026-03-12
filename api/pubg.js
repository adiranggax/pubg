module.exports = async function handler(req,res){

const id = req.query.id

const response = await fetch(
"https://api.bangjeff.com/v3/inquiry/account/pre-validate",
{
method:"POST",
headers:{
"content-type":"application/json",
"x-device-id":"c4707c0c7dbc84cc0a51d91378fba18d",
"x-language":"id",
"xToken":"SnEnrLrxbXYWlFkKuNid/vJq0G8flgCdNC7KI87I4J58...",
"xTokenVersion":"v1.0.0",
"origin":"https://www.bangjeff.com",
"referer":"https://www.bangjeff.com/",
"user-agent":"Mozilla/5.0"
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

const data = await response.json()

res.json(data)

}
