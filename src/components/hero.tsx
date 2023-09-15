
const Hero = () => {

    const estilo = {
        height: '60vh'
    };
    return (
        <div>
            <div style={estilo} className="relative  flex items-center justify-center ">
                <video
                    className="absolute inset-0 object-cover w-full h-full"
                    autoPlay
                    loop
                    muted
                >
                    <source src="./public/assets/tu-video.mp4" type="video/mp4" />
                    Aplicaciones Educativas
                </video>
                <div className="absolute inset-0 bg-black opacity-60 h-6/6 "></div>
                <div className=" text-white z-10 p-4 h-2/5 md:w-2/5 ">
                    <div className='text-center'>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ">
                            EduMob HW
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl font-light">
                            Somos una empresa encargada de desarrollo de Aplicaciones educativas para estudiantes y educadores de alta calidad
                        </p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Hero