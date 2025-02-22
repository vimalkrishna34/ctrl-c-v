const mongoose = require('mongoose');

const uri = "mongodb+srv://Vimal_krishna:<db_password>@cbs.nxxx9.mongodb.net/?retryWrites=true&w=majority&appName=CBS";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected successfully!");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

module.exports = mongoose;
