import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // ye context ki values hai
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            complete: false,
        }
    ],
    // aur ye uski methods hai, their functionality is written in app.jsx file.
    // syntax  depends on the type of context values above, upar we have taken array objects 
    // so syntax is 
    // methodName: (required-values-to-find-todo) => {}
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

// can access all the functionalities of the above context i.e. TodoContext through useTodo 
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider