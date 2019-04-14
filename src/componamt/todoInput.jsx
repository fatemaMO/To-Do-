
import React from 'react';
export default function TodoInput(props){

  return (

<>
 <input className="col-sm-9" type="text" className="input form-control" value={props.value} onChange={props.ontext}></input>
 <button className="col-sm-3 btn btn-success but1" onClick={props.onAdd}>Add</button>
 </>
  );

} 