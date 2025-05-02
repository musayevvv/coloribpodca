import productModel from "../model/model.js";


const getProducts = async (req, res) => {
    const products = await productModel.find();
    res.json(products);
};


const postProducts = async (req, res) => {
    const { name, role, image, description } = req.body;
    const newProduct = await productModel.create({ name, role, image, description });
    res.json(newProduct);
};

const deleteProducts = async (req, res) => {
    const { _id } = req.params;
    await productModel.findByIdAndDelete(_id);
    res.json({ message: `${_id} - li məhsul silindi` });
};


const updateProducts = async (req, res) => {
    const { _id } = req.params;
    const { name, role, image, description } = req.body;
    const updatedProduct = await productModel.findByIdAndUpdate(
        _id,
        { name, role, image, description },
        { new: true }
    );
    res.json(updatedProduct); 
};

export { getProducts, postProducts, deleteProducts, updateProducts };
