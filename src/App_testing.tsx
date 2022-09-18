import React, {useState, useEffect} from 'react';
import {Product} from './components/Product'
//import {products} from './data/products'
import {Navbar} from './components/Navbar'
import { IProduct } from './types/interfaces';
import axios, {AxiosError} from 'axios'

function App() {

  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState('')

  async function fetchProducts(){
    try{
      setError('')
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
      setProducts(response.data)
      setLoading(false)
    } catch(e){
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)

    }
    
    
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <Navbar />
      {loading && <p className='text-center fond-bold text-green-700 my-10 text-5xl'>Loading...</p>}
      {error && <p className='text-center fond-bold text-red-700 my-3 text-5xl'>Error: {error}</p>}
      {products.map(product => <Product key={product.id} product={product} />)}
    </div>
  );
}

export default App;
