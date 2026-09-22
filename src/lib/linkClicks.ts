import getMongoClient from "@/lib/mongodb";

const DB_NAME = process.env.MONGODB_DB ?? "linktree";
const COLLECTION = "linkClicks";

interface LinkClickDoc {
  linkId: string;
  clicks: number;
}

export async function incrementLinkClick(linkId: string): Promise<number> {
  const client = await getMongoClient();
  const collection = client.db(DB_NAME).collection<LinkClickDoc>(COLLECTION);

  const result = await collection.findOneAndUpdate(
    { linkId },
    { $inc: { clicks: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  return result?.clicks ?? 0;
}

export async function getAllLinkClicks(): Promise<Record<string, number>> {
  const client = await getMongoClient();
  const collection = client.db(DB_NAME).collection<LinkClickDoc>(COLLECTION);

  const docs = await collection.find().toArray();
  return Object.fromEntries(docs.map((doc) => [doc.linkId, doc.clicks]));
}
