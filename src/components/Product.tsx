import React, {useState} from 'react';
import {IProduct} from '../types/interfaces'

interface ProductProps {
  product: IProduct 
}

export function Product({product}: ProductProps) {
  const [details, setDetails] = useState(false)

  const btnBgClassName = details ? 'bg-yellow-400' : 'bg-green-400'

  const btnClassName = ['rounded px-5 py-2 outline-0', btnBgClassName]

  return (
    <div className="border py-2 px-4 m-10 rounded flex flex-col items-center mb-2">
      <h2 className="fond-bold text-green-700">{product.title}</h2>
      <span className="fond-bold text-red-700 my-3">Price: {product.price} $ USA</span>
      
      <img src={product.image} className="w-1/6" alt={product.title}/>
     
      <span className="fond-bold text-purple-700 my-3">Rate: {product?.rating?.rate}</span>
     
      <button
        onClick={() => setDetails(prev => !prev)}
        className={btnClassName.join(' ')}
      >
        {details ? 'Hide Details' : 'Show Details'}
      </button>
      
      {details && <p className="py-5">{product.description}</p>}
      
      
    </div>
  );
}