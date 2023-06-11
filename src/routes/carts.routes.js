const { Router } =  require("express");   
const {purchase,getCarts,getCartsById,createCart,addProduct,deleteProducts} = require('../controllers/cartController')
const handlePolicies = require("../middleware/handle-policies.middleware")

const routerCarts = Router();


routerCarts.get('/', getCarts);
routerCarts.post('/', createCart);
routerCarts.get('/:cid', getCartsById);
routerCarts.put('/:cid/product/:pid', handlePolicies(["USER","PREMIUM","ADMIN"]), addProduct);
routerCarts.delete('/:cid/product/:pid', deleteProducts);
routerCarts.get('/:cid/purchase', purchase);


module.exports = routerCarts;