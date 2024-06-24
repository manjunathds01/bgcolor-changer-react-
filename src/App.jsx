import { useState } from "react"



function App() {qw
  
 const [color,setcolor] =useState("grey")

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={()=>setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>red</button>
      </div>
      <div onClick={()=>setcolor("green")} className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>green</button>
      </div>
      <div onClick={()=>setcolor("orange")} className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>orange</button>
      </div>
      <div onClick={()=>setcolor("blue")} className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
      </div>
      <div onClick={()=>setcolor("pink")} className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"pink"}}>pink</button>
      </div>
      <div onClick={()=>setcolor("violet")} className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"violet"}}>violet</button>
      </div>
      <div onClick={()=>setcolor("purple")} className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>purple</button>
      </div>
      <div onClick={()=>setcolor("aqua")} className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"aqua"}}>aqua</button>
      </div>
    </div>
   </div>




   
  )
}

export default App
