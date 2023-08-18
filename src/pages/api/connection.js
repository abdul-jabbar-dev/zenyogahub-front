import { MongoClient, ServerApiVersion } from "mongodb";

const client = new MongoClient("mongodb+srv://abduljabbardev:abduljabbardev@cluster0.fphxmld.mongodb.net/zenyogahub?retryWrites=true&w=majority", {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }

});
let connectionPromise;
async function run() {
    await client.connect();
    const db = await client.db("zenyogahub")
    const userCol = await db.collection('users')
    const classesCol = await db.collection('classes')
    const subscriberCol = await db.collection('subscriber')
    console.log("You successfully connected to MongoDB!");

    return { userCol, classesCol, subscriberCol }
}
export const dbCon = await client.connect();
export default run
