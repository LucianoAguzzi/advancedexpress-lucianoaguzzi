import {promises as fs} from "fs";
import  {nanoid} from "nanoid";

class ProductManager{
    constructor(){
        this.path ="./src/models/products.json"
    }

    readProducts = async () => {
        let products = await fs.readFile(this.path, "utf-8")
        return JSON.parse(products)
    }

    writeProducts = async (product) => {
        await fs.writeFile(this.path, JSON.stringify(product))
    }

    exists = async (id) => {
        let products =  await this.readProducts();
        return products = products.find(product => product.id === id)
    }

    addProducts = async (product) => {
        let productsOld = await this.readProducts();
        product.id = nanoid()
        let productAll = [...productsOld, product]
        await this.writeProducts(productAll)
        return "Product Added"
    };
    getProducts = async () => {
        return await this.readProducts();
    };
    getProductsByID = async (id) => {
        let productById = await this.exists(id);
        if (!productById) return "product not found"
        return productById
    };



    updateProducts = async (id, product) => {
    let productById = await this.exists(id);
    if (!productById) return "product not found"
    await this.deleteProducts(id)
    let productOld = await this.readProducts()
    let products = [{...product, id : id}, ...productOld]
    |await this.writeProducts(products)   
    return "product updated successfully" 
    }   

    deleteProducts = async (id) => {
        let products = await this.readProducts()
        let existProducts = products.some(product => product.id === id)
        if (existProducts){
        let filterProducts = products.filter(product => product.id != id)
    await this.writeProducts(filterProducts)
    return "product eliminated"
    }
    return "product to be deleted not found"
    }
}
export default ProductManager
