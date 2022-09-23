import React, {useContext} from 'react'
import {Navbar} from './components/Navbar'
import {Product} from './components/Product'
import {Loader} from './components/Loader'
import {useProducts} from './hooks/useProducts'
import { ErrorMessage } from './components/ErrorMessage'
import { ModalWindow } from './components/ModalWindow'
import {CreateProduct} from './components/CreateProduct'
import {IProduct} from './types/interfaces'
import {ModalContext} from './context/ModalContext'

function App(){
  const {products, loading, error, addProduct} = useProducts()
  const {modal, open, close} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)

  }

  return (
    <div className="container mx-auto max-w-2xl pt-5 items-center">
      <Navbar onClick={() => open()}/>
      {/*<button className="rounded mt-5 px-5 py-2 bg-green-400 text-red-900 outline-0" onClick={() => setModal(true)}>Create a new product</button>*/}
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map(product => <Product product={product} key={product.id} />)}

      {modal && <ModalWindow title="Create new product" onClose={() => close()}>
        <CreateProduct onCreate={createHandler} />
      </ModalWindow>}
    </div>
  )
}

export default App