const Login=()=>{
    return(
        <>
        <div className="bg-[#3E2723] h-screen w-full flex-col jusitfy-center p-15 items-center flex">
        <div className="bg-white h-[85%] w-[30%] p-6 flex flex-col rounded-lg">
            <h1 className="font-bold text-black py-3 text-[50px] font-serif">Login</h1>
            <p className="text-[20px] text-black">Access your account to explore and manage
            your orders.
</p>
            <h3 className="py-3 text-3xl font-bold ">Email</h3>
            <input className="rounded border border-[#A67B5B] px-2 py-3 text-sm" type="text" placeholder="you@example.com" />
            <h3 className="py-3 text-3xl font-bold ">Password</h3>
            <input className="rounded border border-[#A67B5B] px-2 py-3 text-sm" type="password" placeholder="......"/>
            <button className="bg-[#3E2723] text-white text-3xl font-bold font-serif mt-5 py-3 rounded-xl hover:bg-[#A67B5B] transition duration-300" type="submit">Login</button>
            <h1 className="text-[20px] text-black mt-3">Don't have an account? <span className="text-[#A67B5B] hover:underline cursor-pointer">Sign up</span></h1>
        </div> </div>
        </>
    )
}
export default Login;