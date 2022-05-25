import React from "react";
import { useState } from "react";
import styles from "./Todo.module.css"

const Todo=()=>{
  let [value,setValue]=useState("hhuuu");
    const [todos,setTodos]=useState([]);
    

    const handleChange=(e)=>{
        setTodos(e.target.value);
    };

    return (
      <div>
           <input className={styles.input} value={value} onChange={(e)=>{
               setValue(e.target.value);
           }} type="text" placeholder="Write Something"/>
           <button className={styles.btn} onClick={()=>{
               setTodos([ ...todos, {id: Date.now(), value: value} ]);
               setValue("");
           }}>+</button>
       {todos.map((todo)=>(
               
               <div className={styles.todo}>
                  
                   <div key={todo.id}> {todo.value}</div>
                   <input className={styles.to} type="checkbox"/>
                  
                   </div>
    ))}
      </div>
    )
}


export default Todo