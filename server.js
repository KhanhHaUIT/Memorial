const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://test:kpcl8ihvWZHgCqzU@cluster0.rrcyu.mongodb.net/test?authSource=admin&replicaSet=atlas-u3bbz4-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/auth', require("./routes/auth.route"));
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
