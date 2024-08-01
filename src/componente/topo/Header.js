import "./topo.css"
import Logo from "./img/logo.png"
import { Link } from "react-router-dom";
function Header(){
    return(
         <header>
            <div className="container">
               <div className="logo">
                   <img src= {Logo} className="imagemLogo" height="180px"/>

                   <h1 className="h1Topo">Pousada Ubatuba</h1>
                   <p className="pTopo">Av. Leovigildo Dias Vieira, 675 - Itaguá, Ubatuba - SP, 11688-600</p>
               </div>

               <div className="menu"> 
                   <ul>
                      <li><Link>Página Inicial</Link></li>
                      <li><Link>Reservas</Link></li>
                      <li><Link>Localização</Link></li>
                   </ul>
               </div>
            </div>
         </header>
    )
}

export default Header;