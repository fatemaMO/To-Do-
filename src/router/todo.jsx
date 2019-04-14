import React, { Component } from 'react';

import DataItem from '../componamt/todoItem'
import DataInput from '../componamt/todoInput';
import TodoButton from '../componamt/todobutton';


export default class   Todoss extends Component {
  state= {
    current_todo:"",
    currentFilter: 0,
    todolist:[],
   }
    todofilter= () =>{
      console.log("jfb");
     
       if(this.state.currentFilter===1)
       {
        return this.state.todolist.filter((item) => {
          return !item.completed;
        });
       }
       else if(this.state.currentFilter===2)
       {
        return this.state.todolist.filter((item) => {
          return item.completed;
        });
       }
       else 
       {
        return this.state.todolist;
       }
   }

   handelAdd=event =>{
     this.setState({
        
          current_todo:"",
          todolist:this.state.todolist.concat({
               
            id:Math.random(),
            title:this.state.current_todo,
            completed:false,
          }),

     });
   };

   handeltext=event=>{
                
    this.setState({
           
      current_todo:event.target.value,


    });

   };
   handelDelete=item=>event=>{
          console.log(item.id)
         this.setState({
                           
          current_todo:"",
          todolist:this.state.todolist.filter(i=> i.id!==item.id),


         });
     
   };
   handelchek=item=>event=>{
    console.log(item.id)
    this.setState({
                      
     current_todo:"",
     todolist:this.state.todolist.map( i=> {

      if(i.id===item.id)
      {
        item.completed= !item.completed;
      }
      return i;
     }),
    });
   };

   handelAll=event=>{

      this.setState({
       
        currentFilter:0,
        
      })
   }

   handelComplete=event=>{

    this.setState({
     
      currentFilter:2,
      
    })
 }

 handeunComplete=event=>{

  this.setState({
   
    currentFilter:1,
    
  })
}
    
   componentDidMount() {
    console.log("in mount");
    window.fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(data => {
     
      this.setState({
        currentToDo: "",
        todolist: data
      })
    });
  }
  render() {

    
    return (
      <div className="contact">
      <div className="App">
      <h1>
        My ToDo
      </h1>
      <div class="button">
        <TodoButton className="but" ontodo={this.handeunComplete} oncomplet={this.handelComplete} onAll={this.handelAll}/>

      </div>
           <div class="input">
           <DataInput   ontext={this.handeltext} onAdd={this.handelAdd} value={this.state.current_todo}/>
            
           </div>
       
           <div class="list">
           <ul>
             {this.todofilter().map(item=>(
              
              <DataItem  item={item}  onDelete={this.handelDelete} onChek={this.handelchek}/>


             ))}
           </ul>
           </div>
           
          
      </div>
      </div>
    );
  }
}

// export default App;
