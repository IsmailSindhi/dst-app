const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Blog = require("../models/blogModel");

exports.createBlog = catchAsyncErrors(async (req,res,next) => {
    
let images = [];

if (typeof req.body.images === "string") {
  images.push(req.body.images);
} else {
  images = req.body.images;
}

const imagesLinks = [];

for (let i = 0; i < images.length; i++) {
  const result = await cloudinary.v2.uploader.upload(images[i], {
    folder: "blogs",
  });

  imagesLinks.push({
    public_id: result.public_id,
    url: result.secure_url,
  });
}

req.blog.images = imagesLinks;
req.blog.user = req.user.id;

const blog = await Blog.create(req.body);

res.status(201).json({
  success: true,
  blog,
});
});















