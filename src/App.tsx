import React from 'react'
import {Navbar} from './components/Navbar'
import {Product} from './components/Product'
import {Loader} from './components/Loader'
import {useProducts} from './hooks/useProducts'
import { ErrorMessage } from './components/ErrorMessage'

function App(){
  const {products, loading, error} = useProducts()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <Navbar />
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  )
}

export default App