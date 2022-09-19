import React, {useState} from 'react'
import {IProduct} from '../types/interfaces'
import {ErrorMessage} from './ErrorMessage'
import axios from 'axios'

const productData: IProduct = {
  
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    category: 'electronic',
    rating: {
      rate: 5,
      count: 10
    }
}

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

export const CreateProduct: React.FC<CreateProductProps> = ({onCreate}) => {

  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    if(value.trim().length === 0){
      setError('Please enter the right title!')
      return
    }

    productData.title = value
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

    onCreate(response.data)
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)

  }
  return (
    <form onSubmit={submitHandler}>
      <input 
        value={value}
        onChange={changeHandler}
        type="text" 
        className="border py-2 px-4 mb-2 w-full outline-0" 
        placeholder="Enter the title of product" />

        {error && <ErrorMessage error={error} />}
      <button type="submit" className="border py-2 px-4 bg-emerald-500 text-white hover:text-red-500 outline-0">Create</button>

    </form>
  )
}