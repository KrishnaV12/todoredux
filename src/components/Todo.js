import React, { useState } from "react";
import FigureCaption from "react-bootstrap/esm/FigureCaption";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addtodo, deletetodo, removetodo } from "../action";

const Todo = () =>{
const [inputData,setInputData]= useState("");
const list = useSelector((state)=>state.todoReducers.list)
const dispatch = useDispatch();

  return(
    <>
      <div className="main_div">
        <div className="child_div">
          <figure>
            <figcaption>ADD UR FUCKING LIST HERE</figcaption>
          </figure>
          <div className="add_item">
            <input type="text" placeholder="Write" 
                value={inputData}
                onChange={(event)=>setInputData(event.target.value)}
            />
            <i className="fa fa-plus add-btn" onClick={()=>dispatch(addtodo(inputData),setInputData(" "))}></i>

            
          </div>
          <div>
          {
              list.map((elem)=>{
                  return(
              <div className="showItem" key={elem.id} >
                  <h3>{elem.data}</h3>
                  <div className="todo-btn"></div>
                  <i className="far fa-trash-alt add-btn" title="delete item" onClick={()=>dispatch(deletetodo(elem.id))}></i>
              </div>


              )})

          }
          </div>

          <div className="showitems">
              <button className="btn effect04" data-sm-link-text="remove" onClick={()=>dispatch(removetodo())}><span>cheq list</span></button>
          </div>


        </div>
      </div>
    </>


  );
}

export default Todo;