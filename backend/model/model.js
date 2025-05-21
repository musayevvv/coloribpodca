import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        role: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true }
);

const productModel = mongoose.model('Products', productSchema);

export default productModel;


//guldeste love