const SocialMedia = () => {
    
    return (
        <div className=" py-10 bg-slate-300">
            <h2 className="text-center py-10 text-5xl font-semibold">Redes Sociales</h2>
            <div className="flex lg:flex-row justify-center items-center lg:gap-x-36  flex-col gap-y-10">
            <div className="lg:w-1/5 bg-slate-200 p-6 rounded-lg w-4/5 ">
                <p className="text-center text-3xl py-7 font-medium">Facebook</p>
                
            </div>
            <div className="lg:w-1/5 bg-slate-200 p-6 rounded-lg w-4/5 ">
                <p className="text-center text-3xl py-7 font-medium">Youtube</p>
                
            </div>
            <div className="lg:w-1/5 bg-slate-200 p-6 rounded-lg w-4/5 ">
                <p className="text-center text-3xl py-7 font-medium">Tiktok</p>
                
            </div>
            </div>
            
        </div>
    )
}

export default SocialMedia 