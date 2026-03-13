export default async function handler(req, res) {

const { id } = req.query

if(!id){
 return res.json({
  status:false,
  message:"Masukkan id"
 })
}

try{

const encoded = Buffer.from(`userid:${id}`).toString("base64")

const url =
`https://api.tokogame.com/core/v1/orders/validate-order?productId=63338bc5d16e41172ceb0466&encryptedAnswers=${encoded}`

const r = await fetch(url,{
 headers:{
  "accept":"application/json",
  "x-region":"ID",
  "x-language":"ID",
  "x-currency":"IDR",
  "referer":"https://www.tokogame.com/",
  "user-agent":"Mozilla/5.0"
 }
})

const data = await r.json()

if(data.code !== "SUCCESS"){
 return res.json({
  status:false,
  message:"ID tidak ditemukan"
 })
}

res.json({
 status:true,
 nickname:data.data.username
})

}catch(e){

res.json({
 status:false,
 error:e.message
})

}

}
