const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
      },
      desc: {
        type: String,
        required: true,
      },
      images: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
      categories: {
        type: Array,
        required: true,
      },
    numOfReviews: {
        type: Number,
        default: 0,
      },
      reviews: [
        {
          user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          rating: {
            type: Number,
            required: true,
          },
          comment: {
            type: String,
            required: true,
          },
        },
      ],
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    },
    { timestamps: true }
    );

module.exports = mongoose.model("Blog", blogSchema)