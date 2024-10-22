
import { useState } from 'react';
import './App.css';

function App() {
  let [todo,setTodo]=useState([]);

  let saveToDo=(event)=>{

    let toname=event.target.toname.value; 
    if(! todo.includes(toname)){
      let finalTodo=[...todo,toname]
      setTodo(finalTodo)

    }
    else{
      alert("already exist")
    }
    

    event.preventDefault();

  }

  let list= todo.map((value,index)=>{
    return(

      <ListItems key={index} value={value}
       indexNumber={index}
       todo={todo}
       setTodo={setTodo} 
      
      />

    )  
  })

  return (
    <div className="App">
      <h1>TO-Do-LIST</h1>
      <form onSubmit={saveToDo}>
        <input type='text' name='toname'></input>
        <button>submit</button>
      </form>
      <div className='lists'>
        <ul>
          {list}
       
         
        </ul>
      </div>
    </div>
  );
}

export default App;

function ListItems({value,indexNumber,todo,setTodo}){
  
  let DeleteRow=()=>{ 
    let finalList=todo.filter((v,i)=>i!==indexNumber)
    setTodo(finalList)
  }
  
  return(
  <li>{value}<span onClick={DeleteRow}>&times;</span></li>
  )
} 
