import express from 'express';
import {products} from '../utils/Constants/products.js';

const productRoutes = express.Router();

const productName = [
  {name: 'Mobile'},
    {name: 'Laptop'}
];

productRoutes.get('/', (req, res)=>{
  try {
    
    res.status(200).send({status: 200, message: 'success', data: productName})
  } catch (err) {
    console.error('Error:', err);
    
  }
});
productRoutes.get('/products', (req, res)=>{
  try {
    res.status(200).send({status: 200, message: 'success', data: products})
  } catch (err) {
    console.error('Error:', err);
    
  }
});
export default productRoutes;