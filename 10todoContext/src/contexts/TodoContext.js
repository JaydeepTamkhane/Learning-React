import { useContext } from "react";
import { createContext } from "react";


export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo mess",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    
})

export const TodoProvider=TodoContext.Provider;


export const useTodo=()=>{
    return useContext(TodoContext)
}