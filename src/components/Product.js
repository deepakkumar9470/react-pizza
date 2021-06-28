import React from 'react'
import pep from '../images/peproni.png'
import {Link} from 'react-router-dom'
const Product = () => {
    return (
        <>
            <Link>
            <div>
                  <div>
                      <img src={pep} alt="pep" className="rounded-sm"/>
                       <div className="text-center">
                        <h2 className="text-lg font-bold py-2">Havana Special</h2>
                        <span className="bg-gray-400 py-1 rounded-full text-sm px-4">Small</span>
                       </div>

                       <div className="flex items-center justify-between mt-4">
                           <span>500</span>
                           <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">ADD</button>
                       </div>
                   </div>
                 
            </div>
            
            </Link>
       </>
    )
}

export default Product
