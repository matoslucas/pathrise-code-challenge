import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(
    `mongodb+srv://lucas:LpIhNqgVkrKkpP6V@cluster0.m4y7o.mongodb.net/Cluster0?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    () => console.log("connected to DB!")
  );
};

export default connectDB;
