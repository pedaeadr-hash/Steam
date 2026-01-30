import { useParams } from "react-router-dom";
import "./Detalhes.css"
import Naughtdog from "../../assets/Naughtydog.png"
import Steam from "../../assets/steam.png"
import Play from "../../assets/playstation.png"
import Fromsoft from "../../assets/fromsoftware.png"

function Detalhes () {
    const {slug}= useParams()
    const JOGOS = {
        the_last_of_us_II : {
            title: "The Last of Us Part II",
            sinops: "Em um mundo devastado por uma pandemia que transformou a humanidade, Ellie embarca em uma jornada sombria e cheia de perigos em busca de justiça e redenção. Conforme enfrenta inimigos implacáveis e dilemas morais profundos, ela descobre que o verdadeiro desafio não está apenas na sobrevivência, mas nas escolhas que moldam seu destino. Prepare-se para uma experiência intensa, com narrativa emocionante, gráficos incríveis e uma imersão que vai mexer com suas emoções.",
            media: "https://www.youtube.com/embed/W2Wnvvj33Wo?si=Er50KI-6NFJxNCte",
            produtora: Naughtdog,
            plataformaPC: Steam,
            plataformaPL: Play,
        },
        Bloodborne : {
            title: "Bloodborne",
            sinops: "Em uma cidade antiga e sombria, envolta por uma névoa de mistério e terror, você assume o papel de um caçador imerso em uma luta desesperada contra horrores indescritíveis e uma maldição que consome a mente e o corpo. Conforme desbrava ruas assustadoras, enfrenta criaturas grotescas e desvenda segredos perturbadores, cada passo é um teste de coragem e sanidade. Prepare-se para uma experiência obscura e intensa, onde o medo, a estratégia e a determinação se entrelaçam em uma narrativa que desafia seus limites e mergulha você em um universo aterrorizante e fascinante.",
            media: "https://www.youtube.com/embed/G203e1HhixY?si=henYRmuZgG1JQS2c",
            produtora: Fromsoft,
            plataformaPC: false,
            plataformaPL: Play,
        }
    };

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
                        <div className="p">{JOGO.plataformaPC && <img src={JOGO.plataformaPC} alt="plataforma PC" />}{JOGO.plataformaPL && <img src={JOGO.plataformaPL} alt="plataforma Play" />}
                        </div>
                </div>

























            </div>
        </div>
    );
}
export default Detalhes;