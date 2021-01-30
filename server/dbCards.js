// This is the models for tinder cards
import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
});

// In NoSQL database instead of tables there are Collections...
// Lifecycle of the db is like Collection > [Documents] > Collection > [documents] > ................

export default mongoose.model("cards", cardSchema);