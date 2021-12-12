const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const memorialRouter = require("./routes/memorial.route");

app.use(
  '/api/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument),
);

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


app.all("/", function (req, res, next) {
  res.send("Server is running");
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/memorials', memorialRouter);
app.use('/api/users', userRouter);
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Not found",
  });
})


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
