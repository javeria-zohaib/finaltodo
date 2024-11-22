"use client"
import Image from "next/image";

import { useState } from "react";
export default function Todo() {
  const [todolist,settodolist]=useState(['Reading','Learncoding']);
  const [taskname,settaskname]=useState("");
  // add new task
  const handleAddname=()=>{
    settodolist ([...todolist,taskname]);
    settaskname ("")


  }
  // handle input changes
  const handletaskname=(e:any)=>{
    settaskname(e.target.value)
  };
  //delete task
  const handledeletetask=(index:number)=>{
    settodolist(todolist.filter((c,i)=>{return i != index}))

  }
 

  return (
    <div className="grid place-items-center h-screen bg-teal-700 ">
      
      
      <div className="space-y-10">
        <div className="flex space-x-4">
        <input type="text" id="task" name="task" value={taskname} onChange={(e)=> handletaskname(e)} className="block leading-10 rounded-2xl w-96 px-2 py-2 bg-blue-200 text-xl font-bold"/>
       
          <button className="bg-blue-600 px-4 py-2 text-white font-extrabold rounded-2xl" onClick={handleAddname}>Addtask</button></div>
          <div>
          <ul className="font-bold text-xl space-y-2">
            {
              todolist.map((c,i)=>(
                <li key={i} className="bg-green-300 px-2 py-2 rounded-2xl flex justify-between ">
                  <div className="inline-block w-[250px]">{c}</div>
                  <span><button className="bg-yellow-700 roonded-lg w-8 h-8 text-white" onClick={()=>handledeletetask(i)}>X</button></span>
                </li>
                
              ))
            }
     
          </ul>
        </div>
     
      </div>

      < div> 
  <Image src="/todolist_image.jpeg" alt="TODO" height={300} width={300}/>
  </div>
       

    </div>
    

  
    
  
  )

}
