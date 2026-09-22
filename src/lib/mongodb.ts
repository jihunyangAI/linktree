import { MongoClient } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient> | undefined = global._mongoClientPromise;

export default function getMongoClient(): Promise<MongoClient> {
  if (!clientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error(
        "MONGODB_URI 환경변수가 설정되지 않았습니다. .env.local을 확인하세요."
      );
    }

    clientPromise = new MongoClient(uri).connect();

    if (process.env.NODE_ENV === "development") {
      global._mongoClientPromise = clientPromise;
    }
  }

  return clientPromise;
}
