
const Header = () => {
    const navbarItems = [
        {
            nmae: 'Objetivos',
            id: '#objetivoPagina'
        },
        {
            nmae: 'Aplicaciones',
            id: '#aplicacionesPagina'
        },
        {
            nmae: 'Comentarios',
            id: '#comentariosPage'
        },
        {
            nmae: 'Redes Sociales',
            id: '#redesPagina'
        }
        
        
        
        
        
        
    ]

    return (
        <ul className="flex sm:flex-row justify-end px-5 py-6 bg-slate-300 font-bold text-base/6 flex-col text-center">
            {navbarItems.map((item) => {
                return(
                    <li className="px-10 py-3 cursor-pointer hover:bg-slate-100 transition text-lg" >
                        <a href={item.id}>
                        <ul >
                     
                            {item.nmae}
                        </ul>
                        </a>
                        
                    </li>
                    
                )
            })}
        </ul>
    )
}

export default Header