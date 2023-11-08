import React, { useState } from 'react'
import TodoInput from './todo/components/TodoInput'
import Todolist from './todo/components/Todolist';
const App = () => {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText]);
  }

    const deleteListItem=(key)=>{
      let newListTodo=[...listTodo]
      newListTodo.splice(key,1)
      setListTodo([...newListTodo])
    }
  
  return (
    <div className='main-container'>
    <div className='center-container'>

      <TodoInput addList={addList}/>
      <h1 className='app-heading'>My ToDo List</h1>
      <hr/>
      {listTodo.map((listItem,i)=>{
        return(
          <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
        )
      })}
        
          
      

    </div>
    </div>

  )
}

export default App