import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../features/commentSlice';

function AddComment() {
    let [input,setInput]=useState("");
    const dispatch=useDispatch()
    const onSubmitPush=(e)=>{
        e.preventDefault()
        dispatch(addComment(input))
        setInput("")
    }
  return (
    <>
    <form className='flex gap-2' onSubmit={onSubmitPush}>
        <input type="text"value={input} onChange={(e)=>{
            setInput(e.target.value)
        }} />
        <button type='submit' className='p-2 border-2 border-black'>add</button>
    </form>
    </>
  )
}

export default AddComment