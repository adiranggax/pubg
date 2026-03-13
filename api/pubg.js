export default async function handler(req, res) {

const id = req.query.id

if(!id){
 return res.json({
  status:false,
  message:"ID kosong"
 })
}

try{

const payload = `userid:${id}`
const encoded = Buffer.from(payload).toString("base64")

const url =
`https://api.tokogame.com/core/v1/orders/validate-order?productId=63338bc5d16e41172ceb0466&encryptedAnswers=${encodeURIComponent(encoded)}`

const r = await fetch(url,{
 method:"GET",
 headers:{
  "accept":"application/json",
  "x-region":"ID",
  "x-language":"ID",
  "x-currency":"IDR",
  "referer":"https://www.tokogame.com/"
 }
})

const data = await r.json()

res.json({
 status:true,
 raw:data
})

}catch(e){

res.json({
 status:false,
 error:e.message
})

}

}
