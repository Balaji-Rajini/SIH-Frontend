// function Bottomdiv(){


//     const station  = {
//         ["MS", "TBM", "CGL", "MLMR", "VM", "VRM", "ALU", "LLI", "SRGM", "GOC", "TPJ", "PDKT", "KKDI"]
//     };
//     return(

//           <div className="bg-purple-100 border-t m-5 fixed w-screen bottom-10 border-purple-300 flex justify-between items-center p-4">
//       {/* Left content */}
      
      
//       <div>
//         <h2 className="text-sm font-semibold text-gray-700">12605 - MS KKDI Pallavan Express (10 min Delay)</h2>
//         <div className="flex items-center space-x-4 mt-2">
//           {["MS", "TBM", "CGL", "MLMR", "VM", "VRM", "ALU", "LLI", "SRGM", "GOC", "TPJ", "PDKT", "KKDI"].map((station, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
//                 {station[0]}
//               </div>
//               <span className="text-xs text-gray-600 mt-1">{station}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right content (Reserved Space) */}
//       <div className="flex-1 flex justify-center items-center">
//         <p className="text-xl text-gray-700 font-semibold transform rotate-[-20deg]">
//           Reserved Space
//         </p>
//       </div>
//     </div> 
//     )
// }export default Bottomdiv






function Bottomdiv (){

    const stationforms =[
        {name:"MS"} , { name:"TBM"},{name:"CGl"} , {name:"MLMR"} , {name:"VM"},{name:"VRM"},{name:"ALU"},{name:"LLI"},{name:"SRGM"},{name:"GOC"},{name:"TPJ"},{name:"PDKT"},{name:"KKDI"}
    ]




    return(


<div className="bg-purple-200   p-12    m-20">

          <div className="relative w-full">
        {/* First line */}
        <div className="border-t-2 p-12  border-black w-full mt-2"></div>

        {/* Number Box positioned on first line */}
        <div className=" absolute left-10 -top-3 bg-gray-500 text-white px-12 py-1 rounded">
          12345
        </div>  <div className=" absolute right-96 -top-3 bg-gray-500 text-white px-12 py-1 rounded">
          67890
        </div>

</div>

<div className="relative w-full ">
    <div className="border-t-2 border-black w-full  p-12 mt-2 "></div>
<div className="bg-gray-500 -top-4 text-white  px-12  py-1 rounded-md absolute left-32   w-max  ">6789</div>
</div> 

<div className="relative w-full ">
    <div className="border-t-2 border-black w-full  p-12 mt-2 "></div>
<div className="bg-gray-500 -top-4 text-white  px-12  py-1 rounded-md absolute left-96   w-max  ">6789</div>
</div> 

<p className="text-2xl  font-semibold">12605 -  MS KKDI Pallavan Express (10 Mins Delay) </p>


<div className="flex  cursor-pointer">
    <div className="bg-purple-800 h-8 w-8 mt-8 rounded-full ">    </div>
<hr  className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 "/>

    <div className="bg-purple-800 h-8 w-8 mt-8 rounded-full ">    </div>
<hr  className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 "/>

    <div className="bg-purple-800 h-8 w-8 mt-8 rounded-full ">    </div>
<hr  className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 "/>
    <div className="bg-purple-800 h-8 w-8 mt-8 rounded-full ">    </div>
<hr  className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 "/>
    <div className="bg-purple-800 h-8 w-8 mt-8 rounded-full ">    </div>
<hr  className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 "/>
    <div className="bg-purple-800 h-8 w-8 mt-8 rounded-full ">    </div>
<hr  className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 "/>
    <div className="bg-purple-800 h-8 w-8 mt-8 rounded-full ">    </div>
<hr  className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 "/>
    <div className="bg-purple-800 h-8 w-8 mt-8 rounded-full ">    </div>
<hr  className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 "/>
    <div className="bg-red-800 h-8 w-8 mt-8 rounded-full ">    </div>
<hr  className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 "/>
    <div className="bg-red-800 h-8 w-8 mt-8 rounded-full ">    </div>
<hr  className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 "/>
    <div className="bg-red-800 h-8 w-8 mt-8 rounded-full ">    </div>
<hr  className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 "/>
    <div className="bg-red-500 h-8 w-8 mt-8 rounded-full ">    </div>
<hr  className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 "/>
    <div className="bg-red-500 h-8 w-8 mt-8 rounded-full ">    </div>
</div>
<div className="flex ">

{
    stationforms.map(function(item){
        return(
    <div  className=" -ml-6 p-2"><p className=" px-9">{item.name}</p></div>
   
         )     })
}

</div>
</div>        
    )
}export default Bottomdiv