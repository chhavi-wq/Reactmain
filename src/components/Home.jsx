import Api from "./Api.jsx"
const Home=()=>{
   
    return(
        <>
       <div className="h-screen w-full flex items-end justify-center bg-cover bg-[url('main.jpg')]">
    
    <h1 className="text-white text-[540px] leading-none font-bold font-serif">
        sage
    </h1>

</div>
<div className="h-screen w-full flex justify-around items-center ">
    <div id="Left">
        <h1 className="font-bold font-serif leading-20 text-[80px] text-[#6B7D5C]">New philosphy <br />
        of selfcare : healthy <br />
        skin&hair</h1>
         <p className="font-serif pt-5 leading-6 text-lg text-[#6B7D5C]">Sage is about conscious simplicity - effective formulas,<br />
        thoughtful ingredients, and softTextures designed for real <br />
        everyday life.
        <br />
        <br />
        We believe in skincare should support your skin, not overwhelm <br />
        it, combining modern approach with calm, minimal approach.</p>
        {/* <p>abc</p> */}
        <button className="rounded-4xl mt-7 px-10 py-2 text-white bg-[#6B7D5C]">More about Sage</button>
        </div>
    </div>
    <div className="p-10 h-[80%] bg-[#FFF8E7] w-full">
        <h1 className="items-center font-serif justify-center p-4 flex text-[80px] font-bold text-[#D2B48C] flex">New Arrivals</h1>
         <Api/>
    </div>
    

        
        </>
    )
}
export default Home;