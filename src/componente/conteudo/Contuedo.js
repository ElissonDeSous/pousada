import "./estilo.css"

//imagens
import Quarto1 from "./img/quarto1.avif";

import Quarto2 from "./img/quarto2.jpg"
import Quarto3 from "./img/quarto3.webp";
import Quatro4 from "./img/quarto4.jpg"
import quarto5 from "./img/quarto5.jpg"

import Quarto6 from "./img/quarto 6.jpg"
import Pousada from "./img/imagemPousada.jpg"
import praiaIta from "./img/PraiaItamambuca.jpg"
import praia2 from "./img/praia2.jpg"

function Conteudo (){
    return(
        <div className="ContainerConteudo">
            <h2 className="h2Conteudo">Conheça nossas acomodações</h2>
            <div className="containerCentral">
                <div className="ContainerImg">
                    <div className="imagem1">
                        <img src={Quarto1} className="imgConteudo"  width="300px" />
                    </div>
                    <div className="imagem2">
                        <img src={Quarto2} className="imgConteudo"  width="300px" />
                    </div>
                    <div className="imagem3">
                        <img src={Quatro4} className="imgConteudo"  width="300px" />
                    </div>
                    <div className="imagem4">
                        <img src={quarto5} className="imgConteudo"    width="300px" />
                    </div>
                    <div className="image5">
                        <img src={Quarto3} className="imgConteudo"  width="270px" />
                    </div> 
                    <div className="imagem6">
                        <img src={Quarto6} className="imgConteudo"  width="300px" />
                    </div>
                </div>

                <div className="quem somos">
                    <h2 className="h2Conteudo">Pousada ubatuba</h2>
                    <div className="sobre">
              
                    <div className="paragrafo">
                        <h3 className="h3conteudo">Quem somos</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt condimentum nunc ac lacinia. Aenean a felis id dolor iaculis molestie vel non nisl. Ut laoreet lacinia urna, sit amet placerat massa tincidunt et. Nullam condimentum magna aliquet dolor tempus eleifend. Praesent viverra justo ligula, a iaculis nisl accumsan at. Nunc purus orci, sagittis commodo volutpat at, efficitur eget diam. Suspendisse nec placerat neque.
                        Ut id erat porttitor, pulvinar purus id, auctor velit. Nulla eu urna tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut sodales, nibh sit amet sodales sodales, neque erat fringilla nibh, eget facilisis metus ipsum sed sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sit amet placerat leo. Integer vel ex et lorem consequat hendrerit et ut purus. Donec at tellus non nibh suscipit pharetra. Vivamus et malesuada diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris massa velit, lacinia ut ullamcorper non, iaculis ut orci. Aenean in elit erat. Sed efficitur felis augue, quis varius diam viverra ut. Proin dignissim euismod magna, bibendum vestibulum ipsum gravida ut.
                        </p>
                    </div>
                
                    
                    <div className="galeriaPraias">
                    <img className="imageGrande" src={Pousada} width="500px" />
                 <div className="praiaGlaeria">
                   < img src={praiaIta} className="imagePequena" width="250px"  />
                   < img src={praiaIta} className="imagePequena" width="250px"  />
                    
                </div>
                </div>
                   
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Conteudo;