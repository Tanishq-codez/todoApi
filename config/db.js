// file 2
const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    // using .env file + .gitignore to protect my  db cluster password
    await mongoose.connect(process.env.MONGO_URL , { dbName: "todoDb"

});
    console.log("mongodb connected ");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDb;
