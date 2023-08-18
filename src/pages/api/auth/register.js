 
import run from "../connection"
import bcrpt from 'bcrypt' 
const handler = async (req, res) => {
    const { userCol } = await run()

    if (req.method === "POST") {
        const { body } = req
        if (!body.email || !body.password || !body.name) {
            res.send("error: Credentials missing")
        } else {

            const bcrptPass = await bcrpt.hash(body.password, 15)
            body.password = bcrptPass
            const exist = await userCol.findOne({ email: body.email })
            if (!exist) {

                const result = await userCol.insertOne(body)
                if (result) {
///working
                }
                res.status(200).json(result)
            } else {
                res.status(400).json({ error: "user not exist, try to login" })
            }

        }
    } else {

    }
}
export default handler