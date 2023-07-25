 
 
//  import { Routes,Route } from "react-router-dom";
// import Blogs from "../pages/Blogs";
// import Home from "../pages/Home";
// import Feature from "../pages/Feature";
// import About from "../pages/About";
 


// function App (){
//     return <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/feature"element={<Feature/>}/>
//         <Route path="/About"element={<About/>}/>
//         <Route path="/Blogs"element={<Blogs/>}/>
//     </Routes>
// }

// export default App ;
  
 import {useState} from"react";

function App (){

    const [item, setItem] = useState("")
    const[todos, setTodos]= useState([])
    const handleItem =(event)=> {
        event.preventDefault();
     
        if (item){
            setTodos([...todos, item])
             setItem("");
                console.log("todos")
            }

        


        
    }




    return (<div className="container">
   <h1 style={{textAlign: "center", marginTop:"20px" ,  }}>Our list of Tools</h1>

   <div className="from">
    <form>

     <label> Enter iterm </label> <br/>
     <input type="text" value={item} 
     onChange={(event) => {
        setItem(event.target.value)}}/>
     <button onClick={handleItem}>Add</button>

    </form>

   </div>
  {
    todos.map((todos, index)=>(
   <div className="iterm-pare">
    <div className="iterm">
        <h4>{todos} </h4>

    </div>
   </div>

   ))

}

    </div>
    )
}

export default App;




















