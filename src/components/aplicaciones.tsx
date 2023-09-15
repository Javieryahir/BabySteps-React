
import { useEffect } from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.css';

const Aplicaciones = () => {
    const listadeApps = [
        {
            titulo: "Referencias APPA",
            descripcion: "Generación de referencias en formatos APA, Vancouver y MLA: Nuestra aplicación te permite generar automáticamente referencias bibliográficas correctamente formateadas en los estilos de cita más utilizados en el ámbito académico.Reglas de formato y citación.",
            link: "https://play.google.com/store/apps/details?id=com.javieryahir.matodologia_app",
            icono: "./assets/referencias.png"
        },
        {
            titulo: "FlashCards Maker",
            descripcion: "Aprende y estudia de manera eficaz con Flashcard Maker. Crea tarjetas personalizadas y realiza quizzes para reforzar tu conocimiento. Comparte tus tarjetas y quizzes personalizados fácilmente con tus amigos y compañeros de estudio.",
            link: "https://play.google.com/store/apps/details?id=com.javieryahir.flashcards",
            icono: "./public/assets/flashcard.png"
        },
        {
            titulo: "Trigeobra",
            descripcion: "Realiza tus tareas o automatiza tus procesos mediante esta app la cual contiene mas de 10 temas divididos en 4 areas las cuales son el algebra, trigonometría, geometría, algebra y otros, la app se puede usar sin la necesidad de estar conectado a internet.",
            link: "https://play.google.com/store/apps/details?id=com.javieryahir.project_school",
            icono: "./public/assets/trigeobra.png"
        },
        {
            titulo: "Mange-Health",
            descripcion: "Gestor de salud con esta app puedes calcular tu imc ingresando tu peso, edad, altura, y tu genero, además gestiona tu peso y tu imc ingresándolo en una grafica donde guarda tu progreso. Tiene otras funcionalidades como gestor de comidas o de entrenamientos.",
            link: "https://play.google.com/store/apps/details?id=com.javieryahir.apphealth",
            icono: "./public/assets/health.jpg"
        }
    ];


    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div id="aplicacionesPagina" className=" py-10 bg-slate-300">
            <h2 className="text-center py-10 text-4xl font-bold">Aplicaciones</h2>
            <div className="grid place-items-center xl:grid-cols-4 md:grid-cols-2 justify-center items-center content-center px-14  grid-cols-1 gap-y-10 gap-x-10">

                {listadeApps.map((item) => {
                    return (

                        <div data-aos="flip-down" className="max-w-sm p-6 bg-slate-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <div className="w-1/5 h-1/5">
                                <img src={item.icono} className="object-cover  rounded-xl mb-4" alt="" />
                            </div>

                            <a href="#">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.titulo}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                                {item.descripcion}
                            </p>
                            <a href={item.link} target="_blank" className="inline-flex items-center text-blue-600 hover:underline">
                                Ir a la Play Store
                                <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>
                        </div>

                    )
                })}


            </div>

        </div>
    )
}

export default Aplicaciones 