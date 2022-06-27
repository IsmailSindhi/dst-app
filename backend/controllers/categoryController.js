const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Category = require("../models/categoryModel");

exports.createCategory = catchAsyncErrors( async (req,res,next)=>{
    const category = await Category.create(req.body);
    res.status(200).json({
        success: true,
        category
    });
});



exports.getAllCaterories = catchAsyncErrors( async (req,res,next)=>{
    const category = await Category.find();
    res.status(200).json({
        success: true,
        category
    });
});

exports.deleteCategory = catchAsyncErrors( async (req,res,next) => {
    const category = await Category.findById(req.params.id);
    if (!product) {
        return next(new ErrorHander("Product not found", 404));
      }
    
    await category.remove();
    res.status(200).json({
        success: true,
        message: "Product Delete Successfully",
      });
})