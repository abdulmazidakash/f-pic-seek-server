const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = client.db('my-ai-server-db');
const imageCollection = db.collection('images');
const commentCollection = db.collection('comments');

async function connectDB() {
  client.connect();
}
// connectDB().catch(console.dir);

module.exports = {connectDB, imageCollection, commentCollection};