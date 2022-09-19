import React from 'react'

export interface ModalWindowProps {
  children: React.ReactNode
  title: string
  onClose: () => void
}

export const ModalWindow: React.FC<ModalWindowProps> = ({children, title, onClose}) => {
  return(
    <>
      <div className="fixed bg-emerald-500/50 top-0 right-0 left-0 bottom-0" onClick={onClose}/>
      <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
      <h1 className="text-2xl text-center mb-2 text-emerald-500">{title}</h1>
        {children}
      </div>
    </>  
  )
}