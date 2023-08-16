import run from "../connection"


const handler = async (req, res) => {
    const { method } = req
    if (method === 'GET') {
        const { classesCol } = await run()
        const result = await classesCol.find().toArray()
        res.send(result)
    }
}
export default handler