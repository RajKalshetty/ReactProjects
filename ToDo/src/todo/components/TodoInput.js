import React, { useState } from 'react'
import "./style.css"
const TodoInput = (props) => {
  const [inputtext, setInputText] = useState('');
  const handleEnterPress =(e)=>{
    if(e.keyCode===13){
      props.addList(inputtext)
      setInputText("")
    }
  }
  return (
    <div className='input-container'>
      <input type='text'
        className='input-box-todo'
        placeholder='Enter Your ToDo'
        value={inputtext}
        onChange={e => {
          setInputText(e.target.value)

        }}
        onKeyDown={handleEnterPress}/>
      
      <button className="add-btn"
        onClick={()=>{
          props.addList(inputtext)
          setInputText("")
        }}>+</button>






    </div>
  )
}

export default TodoInput