export default async function handler(req, res) {

res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS")
res.setHeader("Access-Control-Allow-Headers", "Content-Type")

if (req.method === "OPTIONS") {
return res.status(200).end()
}

try {

let id = req.query.id

let response = await fetch(
`https://gopay.co.id/games/v1/order/prepare/PUBGM?userId=${id}&zoneId=`
)

let data = await response.json()

return res.json({
status: true,
nickname: data.data
})

} catch (err) {

return res.json({
status:false,
message:"ID tidak ditemukan"
})

}

}
