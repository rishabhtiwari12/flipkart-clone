import { products } from "./constant/data.js";
import Product from "./model/product-schema.js";




const defaultData = () => {
    try {
        Product.insertMany(products);
        console.log("data imported succesfully");
    } catch (error) {
        console.log("erre while inserting default data",error.message)
        
    }
 
}

export default defaultData
