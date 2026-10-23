//require("dotenv").config()
//const app=require('./src/app.js')
//const connectDB=require("./src/db/db.js")
//connectDB()

//const PORT = process.env.PORT || 3000;

//app.listen(PORT, () => {
 //   console.log(`Server is running on port ${PORT}`);
////});
//
//app.listen(3000,()=>{
  //  console.log("Server is running on port 3000")

//})

require("dotenv").config();
const app = require('./src/app.js');
const connectDB = require("./src/db/db.js");

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3000;

// Only call app.listen if we are running locally on our computer,
// NOT when Vercel imports it as a serverless function.

    app.listen(PORT,"0.0.0.0",  () => {
        console.log(`Server is running on port ${PORT}`);
    });


// THIS IS CRUCIAL: Export the app so Vercel can run it
module.exports = app;
