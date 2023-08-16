import { MongoClient, ServerApiVersion } from "mongodb";

const client = new MongoClient("mongodb+srv://abduljabbardev:abduljabbardev@cluster0.fphxmld.mongodb.net/zenyogahub?retryWrites=true&w=majority", {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }

});
async function run() {
    await client.connect();
    const db = await client.db("zenyogahub")
    const userCol = await db.collection('users')
    const classesCol = await db.collection('classes')
    console.log("You successfully connected to MongoDB!");

    return { userCol, classesCol }
}
export default run
