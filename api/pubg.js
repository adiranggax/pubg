export default async function handler(req, res) {

const { id } = req.query

if(!id){
 return res.json({
  status:false,
  message:"Masukkan ID"
 })
}

try{

const encoded = Buffer.from(`userid:${id}`).toString("base64")

const url =
`https://api.tokogame.com/core/v1/orders/validate-order?productId=63338bc5d16e41172ceb0466&encryptedAnswers=${encodeURIComponent(encoded)}`

const r = await fetch(url,{
 method:"GET",
 headers:{
  "accept":"application/json, text/plain, */*",
  "x-region":"ID",
  "x-language":"ID",
  "x-currency":"IDR",
  "x-request-id":"test123",
  "referer":"https://www.tokogame.com/",
  "origin":"https://www.tokogame.com",
  "user-agent":"Mozilla/5.0"
 }
})

const data = await r.json()

if(data.code === "SUCCESS"){
 return res.json({
  status:true,
  nickname:data.data.username
 })
}

res.json({
 status:false,
 message:"ID tidak ditemukan",
 raw:data
})

}catch(e){

res.json({
 status:false,
 error:e.message
})

}

}
