export default async function handler(req, res) {

const { id } = req.query

if(!id){
 return res.status(400).json({
  status:false,
  message:"Masukkan ID"
 })
}

try{

const encoded = Buffer.from(`userid:${id}`).toString("base64")

const url =
`https://api.tokogame.com/core/v1/orders/validate-order?productId=63338bc5d16e41172ceb0466&encryptedAnswers=${encoded}`

const response = await fetch(url,{
 headers:{
  "x-region":"ID",
  "x-language":"ID",
  "x-currency":"IDR"
 }
})

const data = await response.json()

res.json({
 status:true,
 nickname:data?.data?.username || null
})

}catch(e){

res.status(500).json({
 status:false,
 error:e.message
})

}

}
