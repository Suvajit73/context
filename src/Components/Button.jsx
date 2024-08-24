import React from 'react'

export default function Button(props) {
  return (
    <button onClick={props.event} className='bg-red-600 text-3xl font-bold m-4 px-4 py-2 rounded-lg shadow-xl'>{props.data}</button>
  )
}
