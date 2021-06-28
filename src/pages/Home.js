import React from 'react'
import pizza from '../images/pizza.png'
import Products from '../components/Products'
const Home = () => {
    return (
        
        <>
           <div className="hero py-15">
             <div className="container mx-auto mt-3 flex items-center justify-between">
                
                <div className="w-1/2">
                    <h6 className="text-lg">Are you hungry?</h6>
                    <h1 className="text-3xl md:text-6xl font-bold">Dont' wait !</h1>
                    <button className="bg-yellow-500 hover:bg-yellow-600 mt-4 text-white font-bold py-2 px-6  border-yellow-600 rounded-full">Order now</button>
                </div>

                <div className="w-1/2">
                       <img className="w-4/3" src={pizza} alt="pizza" />
                </div>
             </div>
        </div>

        <div className="pb-18">
             <Products/>
        </div>
        </>
    )
}

export default Home
