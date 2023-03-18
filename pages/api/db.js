import clientPromise from "/lib/mongodb";

export default async function handler(req, res) {
  const CLIENT_DB = process.env.CLIENT_DB;
  const client = await clientPromise;
  const db = client.db(CLIENT_DB);

  if (req.method === "POST") {
    const bodyObject = JSON.parse(req.body);
    const insertDb = await db
      .collection("saved_messages")
      .insertOne(bodyObject);

    res.status(200).json({ status: insertDb.acknowledged });
  } else {
    res.status(405);
    res.end();
  }
}
