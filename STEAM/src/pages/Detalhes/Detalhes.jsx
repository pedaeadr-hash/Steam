import { useParams } from "react-router-dom";
import "./Detalhes.css"
import { useRef } from "react";
import Platina from "../../assets/platinna.png"
import Ouro from "../../assets/ouro1.png"
import Prata from "../../assets/prata1.png"
import Bronze from "../../assets/bronze1.png"
import JOGOS from "../../objetos/Jogos"

function Detalhes () {
    const {slug}= useParams()
    const pop=useRef(null)
    function chamar () {
        pop.current.style.left="50%";
    }
    function volt () {
        pop.current.style.left='200%';
    }

    const JOGO=JOGOS[slug]

    return (
        <div className="HD">
            <div className="sec">
                <div className="vv">
                    <iframe src={JOGO.media} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="dc">
                        <h1 className="titulo">{JOGO.title}</h1>
                        <p className="sinopse">{JOGO.sinops}</p>
                </div>
                <div className="jginf">
                        <div className="l"><img  src={JOGO.produtora} alt="logo criadora do jogo" /></div>
                        <div className="p"><h1 className="ver" onClick={chamar}>ver mais</h1><h1 className="vmb" onClick={chamar}>ver mais</h1>{JOGO.plataformaPC && <img src={JOGO.plataformaPC} alt="plataforma PC" />}{JOGO.plataformaPL && <img src={JOGO.plataformaPL} alt="plataforma Play" />}{JOGO.plataformaXB && <img src={JOGO.plataformaXB} alt="plataforma XBOX"/>}
                        </div>
                </div>
                <div className="popt" ref={pop}>
                    <div className="barx" onClick={volt}><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16"><path fill="#ffffff" d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94z"/></svg></div>
                    <div className="tf"><img src={Platina} alt="trofeu de platina" /><h1>{JOGO.trofeuPL}</h1></div>
                    <div className="tf"><img src={Ouro} alt="trofeu de Ouro" /><h1>{JOGO.trofeuOR}</h1></div>
                    <div className="tf"><img src={Prata} alt="trofeu de Prata" /><h1>{JOGO.trofeuPR}</h1></div>
                    <div className="tf"><img src={Bronze} alt="trofeu de Bronze" /><h1>{JOGO.trofeuBR}</h1></div>
                </div>

            </div>




            <div className="mb">
                <div className="bb"> 
                <iframe src={JOGO.media} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <h1 className="mbt">{JOGO.title}</h1>
                <p className="mbs">{JOGO.sinops}</p>

                <div className="mbp"><img  src={JOGO.produtora} alt="logo criadora do jogo" /></div>
                <div className="mbpp">{JOGO.plataformaPC && <img src={JOGO.plataformaPC} alt="plataforma pc"/>}{JOGO.plataformaPL && <img src={JOGO.plataformaPL} alt="plataforma pl"/>}{JOGO.plataformaXB && <img src={JOGO.plataformaXB} alt="plataforma XBOX"/>}</div>


                <div className="mbc">
                    <div className="mm"><img src={Platina} alt="trofeu platina" /><h1>{JOGO.trofeuPL}</h1><img src={Ouro} alt="trofeu ouro" /><h1>{JOGO.trofeuOR}</h1></div>
                    <div className="mm"><img src={Prata} alt="trofeu de prata" /><h1>{JOGO.trofeuPR}</h1><img src={Bronze} alt="trofeu de prata" /><h1>{JOGO.trofeuBR}</h1></div>
                </div>





















            </div>










        </div>
    );
}
export default Detalhes;