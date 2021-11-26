const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

if(process.env.NODE_ENV !== 'production'){
  const morgan = require("morgan");
  app.use(morgan('dev'));
}
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




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/auth', require("./routes/auth.route"));
app.use('/api/memorials', require("./routes/memorial.route"));
app.use('/api/users', require("./routes/user.route"));
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Not found",
  });
})


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
