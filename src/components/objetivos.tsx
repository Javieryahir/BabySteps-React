import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';



const Objetivos = () => {
    const goalsList = [
        {
            title: "Experiencia Inigualable",
            description: "Ofrecemos a los estudiantes una experiencia educativa inigualable. Con un diseño intuitivo y atractivo, nuestras aplicaciones garantizan una navegación sin problemas y un acceso rápido a recursos educativos.",
            icon: "./public/assets/quality.png"
        },
        {
            title: "Revolución en Educación",
            description: "Queremos ser la vanguardia de la revolución en la educación . Con un enfoque en la calidad del contenido, ademas queremos definir la forma en que los estudiantes aprenden en el mundo digital.",
            icon: "./public/assets/fist.png"
        },
        {
            title: "Aprendizaje Sin Limites",
            description: "Creemos en el aprendizaje sin límites. Nuestras aplicaciones están diseñadas para empoderar a los estudiantes y ayudarles a alcanzar su máximo potencial.",
            icon: "./public/assets/online-learning.png"
        },
    ]
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div id="objetivoPagina" className=" py-10 bg-slate-200">
            <h2 className="text-center py-10 text-4xl font-bold ">¿Porque deberias descargar nuestras Apps? </h2>
            <div className="flex lg:flex-row justify-center items-center lg:gap-x-36  flex-col gap-y-10">
            {goalsList.map((item) => {
                return(
                    
                    <div  className="lg:w-1/5  p-6 rounded-lg w-4/5 ">
                    <div data-aos="zoom-in" className="bg-slate-400 h-24 w-24 rounded-full mb-6">
                        <img className=" p-3"src={item.icon} alt="" />
                    </div>
                    <p className="text-left text-2xl py-2 font-medium">{item.title}</p>
                    <p className="text-left">{item.description}
                    </p>
                    </div>
                )
            })}
           
           
            </div>
            
        </div>
    )
}

export default Objetivos