// module.exports = {
//   url: "mongodb+srv://gowsi03:Gowsi2001@finals.8izhp.mongodb.net/back?retryWrites=true&w=majority",
// };

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
