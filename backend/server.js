const { MongoClient } = require('mongodb');
require('dotenv').config(); // For environment variables

const username = "Vimal_krishna"; // Your actual MongoDB username
const password = encodeURIComponent("your_password_here"); // Replace with your password (URL-encoded if needed)
const dbName = "your_database_name"; // Change to your database name

const uri = `mongodb+srv://${username}:${password}@cbs.nxxx9.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=CBS`;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

async function connectDB() {
    try {
        await client.connect();
        console.log("✅ Connected to MongoDB Atlas!");

        const db = client.db(dbName); // Get database reference
        const collection = db.collection("testCollection"); // Example collection

        // Example: Insert test document
        const result = await collection.insertOne({ message: "Hello from MongoDB!" });
        console.log("✅ Test document inserted:", result.insertedId);

    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
    }
}

connectDB(); // Call the function to connect to MongoDB
