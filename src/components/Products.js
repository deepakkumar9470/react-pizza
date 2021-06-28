import React from 'react'
import Product from './Product'


const Products = () => {
    return (
        <div className="container mx-auto pb-20">
            <h1 className="text-lg font-bold my-6">Products</h1>
           

                <div className="grid  grid-cols-5 my-6 gap-20">
                   <Product/>
                   <Product/>
                   <Product/>
                   <Product/>
                   <Product/>
                </div>
                
           
            
        </div>
    )
}

export default Products
