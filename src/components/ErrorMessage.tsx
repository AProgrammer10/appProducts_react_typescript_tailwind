import React from 'react'
import {ErrorMessageProps} from '../types/interfaces'

export const ErrorMessage = ({error}: ErrorMessageProps) => {
  return (
    <p className="text-center fond-bold text-red-700 my-3 text-5xl">Error: {error}</p>
  )
}