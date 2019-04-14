
import React from 'react';
export default function TodoItem(props){

  return (


    <li >  
               
    <input type="checkbox" value="" 
    checked={props.item.completed}
     onChange={props.onChek(props.item)}/>
         <span>{props.item.title}</span>
         <button  className="but2 pull-right btn btn-sm btn-danger" onClick={props.onDelete(props.item)}>delete</button>

  </li>
  );

}