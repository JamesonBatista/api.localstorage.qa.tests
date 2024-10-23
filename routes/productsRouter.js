import express from "express";
const router = express.Router();
import {getProducts, createProduct, updateProduct, deleteProduct, getProductById} from '../controllers/productsController.js'

// Rota para listar todos os produtos
router.get("/", getProducts);

// Rota para adicionar um novo produto
router.post("/", createProduct);

// Rota para atualizar um produto por ID
router.put("/:id", updateProduct);

// Rota para remover um produto por ID
router.delete("/:id", deleteProduct);

// Rota para buscar um produto por ID
router.get("/:id", getProductById);

export default router;
