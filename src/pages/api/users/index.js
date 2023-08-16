import run from "../connection" 
const handler = async (req, res) => {
    const { userCol } = await run()
    const result = await userCol.find().toArray()
    res.send(result)
}
export default handler