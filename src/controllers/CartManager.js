import {promises as fs} from "fs";
import  {nanoid} from "nanoid";
import ProductManager from "./ProductManager.js";

class CartManager{
    constructor(){
        this.path = this.path ="./src/models/carts.json"
    }
}    readCarts = async () => {
    let carts = await fs.readFile(this.path, "utf-8")
    return JSON.parse(carts)
}

writeCarts_ = async (cart) => {
    await fs.writeFile(this.path, JSON.stringify(CartManager))
}
 exists = async (id) =>{
    let carts = await this.readCarts();
    return carts.find(carts => carts.id === id )
 }
addCarts = async (cart) => {
    let cartsOld = await this.readProducts();
    let id =  nanoid();
    let cardsConcat = [{id: id, products: []}, ...cartsOld]
    await this.writeProducts(cardsConcat)
    return "cart added"
}

    getProductsByID = async (id) => {
        let cartByID = await this.exists(id);
        if (!productById) return "cart not found"
        return productById
    }
addProductInCart = async (cartId, productID) => { 
    let cartByID = await this.exists(cartId);
    if (!cartById) return "cart not found"
    let productByID = await productAll.exist(productID)
    if (!cartByID) return "product not found"
    let cartsAll= await this.readCarts()
    let cartFilter = cartsAll.filter((cart) => cart.id != cartId)
   
    if(cartByID.products.some(product=>product.id === productID)){
        let moreProductsInCart = cartByID.products.find(product=>product.id === productID)
        moreProductsInCart.cantidad +1 
        let cartsConcat = [productInCart, ...cartFilter]
        await this.writeCarts(cartsConcat)
        return "product added to cart successfully"   
    }

    cartByID.products.push({id:productByID, cantidad: 1})
    
    let cartConctat = [cartByID, ...cartfilter]
    await this.writeCarts(cartConctat)
    return "product added to cart"
}


export default CartManager