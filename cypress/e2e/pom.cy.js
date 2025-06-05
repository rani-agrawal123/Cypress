import Home from "../pages/Home.js";
import Product from "../pages/product.js";
// import Product from "../pages/product.js";
// import Product from "../pages/Product.js";
        

describe('',()=>{
    const product = new Product();
    const loginPage = new Home()
    
    beforeEach(()=>{
        loginPage.login();
    })

it('testing',()=>{
    product.addToCart();
    product.goToCart()
    
})

// afterEach(()=>{
//     product.logout();

// })
})