


import React from 'react';
export default function TodoButton(props){

  return (

<>

 <button      className="but btn btn-primary"  onClick={props.ontodo}>      Todo     </button>
 <button    className="but btn btn-primary"  onClick={props.oncomplet}>     complete     </button>
 <button    className="but btn btn-primary" onClick={props.onAll} >      All   </button>
 <br></br>

 </>
 
  );

}
