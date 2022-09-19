import React from 'react'

export interface ErrorMessageProps {
  error: string
}

export const ErrorMessage = ({error}: ErrorMessageProps) => {
  return (
    <p className="text-center fond-bold text-red-700 my-3 text-5xl">{error}</p>
  )
}