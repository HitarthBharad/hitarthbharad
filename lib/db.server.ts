/* eslint-disable no-var */
import { MongoClient, Db } from "mongodb";

declare global {
    var __dbClient: MongoClient | undefined;
}

const connectionString = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB;

let client: MongoClient;

if (process.env.NODE_ENV === "production") {
    client = new MongoClient(connectionString);
} else {
    if (!global.__dbClient) {
        global.__dbClient = new MongoClient(connectionString);
    }
    client = global.__dbClient;
}

export async function mongodb(): Promise<Db> {
    if (!client) {
        client = new MongoClient(connectionString);
    }
    await client.connect();
    return client.db(dbName);
}