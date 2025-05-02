import express from 'express';
import { getProducts, postProducts, deleteProducts, updateProducts } from '../controllers/controllers.js';

const router = express.Router();

router
    .get('/', getProducts)        
    .post('/', postProducts)        
    .delete('/:_id', deleteProducts)  
    .put('/:_id', updateProducts);    

export default router;
