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
    const subscriberCol = await db.collection('subscriber')
    const lacturesCol = await db.collection('lactures')
    console.log("You successfully connected to MongoDB!");

    return { userCol, classesCol, subscriberCol, lacturesCol }
}
export const dbCon = await client.connect();
export default run
