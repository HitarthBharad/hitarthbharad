import { MongoClient, BSON, Db } from "mongodb";

const connectionString = process.env.MONGODB_URI || "";
const dbName = process.env.MONGODB_DB;

let client: MongoClient;
let db: Db;

declare global {
    var __dbClient: MongoClient | undefined;
}

if (process.env.NODE_ENV === "production") {
    client = new MongoClient(connectionString);
} else {
    if (!global.__dbClient) {
        global.__dbClient = new MongoClient(connectionString);
    }
    client = global.__dbClient;
}


export const mongodb = async (): Promise<Db> => {
    await client.connect();
    db = client.db(dbName);
    return db;
};

export const _oid = BSON.ObjectId;