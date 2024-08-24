import React, { useContext } from 'react'
import Button from './Button'
import { counterContext } from '../Context/CounterHolder'
export default function Counter() {
  const {count,changeHandler} = useContext(counterContext)
  return (
    <>
        
        <Button data="-" event={() => changeHandler(count-1)}/>
        <div className='text-6xl font-bold text-white'>{count}</div>
        <Button data="+" event={() => changeHandler(count+1)}/>
    </>
  )
}
