import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './Routes/ProductRoutes.js'
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());


const data = [
  {
  message: 'Welcome to new Backend server'
}
];


app.get('/', (req, res)=>{
  try{
    
    res.status(200).send({status: 200, message: 'success', data: data})}
catch(err){
   
  console.log(err.message)
  res.status(500).send({status: 500, message: 'Failed'})}
});

app.use('/products', productRoutes);

app.post('/', (req, res)=>{
  try{
    data.push(req.body)
    res.status(200).send({status: 200, message: 'data added successfully', data: data})}
catch(err){
  res.status(500).send({status: 500, message: 'Failed'})}
});


module.exports = app;
