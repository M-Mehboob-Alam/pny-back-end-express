// importing models
const Product = require('../models/Product');

exports.createProduct = async(req, res) =>{
    try {
        const {name, price, sale_price, description} = req.body;
        const result = await Product.create({
            name, price, sale_price, description
        });
        res.status(200).json({
            success:true,
            data:result,
            message:'product uploaded successful!',
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            data:error,
            message:error.message,
        });
    }
}
exports.getProducts = async(req, res) =>{
    try {
       
        const result = await Product.find({ });
        res.status(200).json({
            success:true,
            data:result,
            message:'all products',
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            data:error,
            message:error.message,
        });
    }
}
exports.getSingleProduct = async(req, res)=>{
    try {
        const {id} = req.params
        const result = await Product.findById({_id: id});
        if (!result) {
            res.status(404).json({
                success:false,
                data:'product is wrong or product is not found',
                message:'product is wrong or product is not found',
            });
        }
        res.status(200).json({
            success:true,
            data:result,
            message:"Single Product Is Found!",
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            data:error,
            message:error.message,
        });
    }
}
exports.updateSingleProduct = async(req, res)=>{
    try {
        const {id} = req.params;
        const {name,description,price,sale_price} = req.body
        const result = await Product.findByIdAndUpdate(id, {name,description,price,sale_price});
        if (!result) {
            res.status(404).json({
                success:false,
                data:'product id wrong or product is not found',
                message:'product id wrong or product is not found',
            });
        }
        res.status(200).json({
            success:true,
            data:result,
            message:"product update successful!",
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            data:error,
            message:error.message,
        });
    }
}
exports.deleteSingleProduct = async(req, res)=>{
    try {
        const {id} = req.params;
        
        const result = await Product.findByIdAndDelete({_id:id});
        if (!result) {
            res.status(404).json({
                success:false,
                data:'product id wrong or product is not found',
                message:'product id wrong or product is not found',
            });
        }
        res.status(200).json({
            success:true,
            data:result,
            message:"product deleted successful!",
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            data:error,
            message:error.message,
        });
    }
}
exports.searchProduct = async(req, res)=>{
    try {
        const {q} = req.params;
        
        const result = await Product.find({
            "$or":[
                {"name":{$regex:q}},
                {"description":{$regex:q}},
            ]
        });
        if (!result) {
            res.status(404).json({
                success:false,
                data:'nothing found',
                message:'nothing found',
            });
        }
        res.status(200).json({
            success:true,
            data:result,
            message:"products",
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            data:error,
            message:error.message,
        });
    }
}