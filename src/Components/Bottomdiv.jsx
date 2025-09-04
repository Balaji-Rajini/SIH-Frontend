




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
