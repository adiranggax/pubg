export default async function handler(req, res) {

const { id } = req.query

if(!id){
 return res.json({
  status:false,
  message:"Masukkan ID PUBG"
 })
}

try{

const url =
`https://gopay.co.id/games/v1/order/prepare/PUBGM?userId=${id}&zoneId=`

const r = await fetch(url,{
 headers:{
  "accept":"application/json",
  "x-client":"web-desktop",
  "user-agent":"Mozilla/5.0"
 }
})

const data = await r.json()

if(data.message === "Success"){
 return res.json({
  status:true,
  id:id,
  nickname:data.data
 })
}

return res.json({
 status:false,
 message:"Player tidak ditemukan"
})

}catch(e){

return res.json({
 status:false,
 error:e.message
})

}

}
