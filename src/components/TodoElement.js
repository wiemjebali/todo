import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import {Toggel,deletTodo} from '../redux/todolistSlice'
const TodoElement = ({todoElement}) => {
  console.log('todoElement',todoElement)

const dispatch = useDispatch()

const handelDeletTodo=(id)=>{
  dispatch(deletTodo(id))
}


  return (
    <div  style={{display:'flex', padding:'10px'}} >
      <li>
        {todoElement.text}
      </li>
      <div style={{marginLeft:"100px"}}  >
      <Button variant="outline-warning" onClick={()=>dispatch(Toggel(todoElement.id))}  > 
      {todoElement.done? "DOne ✔️" :"not Yet "}</Button>
      <Button variant="outline-danger"  onClick={()=>handelDeletTodo(todoElement.id)}  >Remove</Button>
      </div>
    </div>
  )
}

export default TodoElement