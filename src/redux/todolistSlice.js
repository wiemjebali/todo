
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    { id:uuidv4(), text: "Doing Homeworks", done: false},
    { id:uuidv4(), text: "i have to see some friends !", done: true },
    { id:uuidv4(), text: "Learning more of Redux", done: false},
    
   
]

const todolistSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {

    //add elemnt : 
    addTodo:(state,action)=>{
        const newTodo={
            id:uuidv4(),
            done:false,
            text:action.payload
        }
        state.push(newTodo)
    },

    //delet Todo : 
    deletTodo:(state,action)=>{
        state = state.filter(el=> el.id !== action.payload)
        return state
    },
//toggel function : 

Toggel:(state,action)=>{
    const task = state.find(el => el.id === action.payload)
    task.done = !task.done
},


  }
});

export const {Toggel,deletTodo,addTodo} = todolistSlice.actions

export default todolistSlice.reducer