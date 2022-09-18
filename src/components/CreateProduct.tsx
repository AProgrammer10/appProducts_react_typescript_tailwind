import React, {useState} from 'react'

export const CreateProduct: React.FC = () => {

  const [value, setValue] = useState('')

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
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
      <button type="submit" className="border py-2 px-4 bg-emerald-500 text-white hover:text-red-500 outline-0">Create</button>

    </form>
  )
}