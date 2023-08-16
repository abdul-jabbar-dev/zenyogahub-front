import { ObjectId } from "mongodb"
import run from "../connection"
const handler = async (req, res) => {
    const { classId } = req.query
    const { classesCol } = await run()
    const result = await classesCol.findOne({ _id: new ObjectId(classId) })
    res.send(result)
}
export default handler