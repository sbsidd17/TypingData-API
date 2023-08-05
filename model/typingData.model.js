import mongoose from "mongoose";
import "dotenv/config";

const typingDataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: [5, "Title should be atleast 5 characters"],
      maxLength: [100, "Title should be less than 100 characters"],
    },
    paragraph: {
      type: String,
      required: true,
      minLength: [5, "Paragraph should be atleast 5 characters"],
      maxLength: [5000, "Paragraph should be less than 5000 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const TypingDataModel = mongoose.model("typingData", typingDataSchema);

export default TypingDataModel;
