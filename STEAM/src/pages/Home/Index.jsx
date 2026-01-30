import './Home.css'
import { useState, useRef, } from 'react'
import Logo from "../../assets/logol1.png"
import The from "../../assets/thelastw.mp4"
import Dog from "../../assets/Naughtydog.png"
import Cherry from "../../assets/cherry.png"
import Silent from "../../assets/silenthill.mp4"
import Konami from "../../assets/konami.png"
import Hollow from "../../assets/hollow.mp4"
import Thef from "../../assets/thelast.jpg"
import Blood from "../../assets/bloodborne.jpg"
import DarkII from "../../assets/darksoulsII.jpg"
import DarkIII from "../../assets/darksouls3.jpg"
import ElderR from "../../assets/eldenring.jpg"
import Daysgone from "../../assets/daysgone.jpg"
import { useNavigate } from 'react-router-dom'

function Home (){
    let [pos,setpos]=useState(0)
    const carrosel=useRef(null)
    


    function Next () {
        if (pos <1) {
            const novapos =pos +1;
            setpos(novapos)
            
        }
    }

    function Prev () {
        if (pos >-1) {
            const novapos =pos -1;
            setpos(novapos)
            
        }
    }

    const nav =useNavigate()








    return (
        <div className='HH'>
                <header>
                    <img src={Logo} alt="" />
                </header>
                <div className='box'></div>
                <div className='content'>
                    <div className='btn'>
                        <div className='left' onClick={Prev}><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="#ffffff" fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd"/></svg></div>
                        <div className='bolls'><div className="bolls"> {[-1, 0, 1].map((index) => ( <div key={index} className={pos === index ? "boll active" : "boll"} /> ))} </div> </div>
                        <div className='right' onClick={Next}><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.25 4.5l7.5 7.5l-7.5 7.5"/></svg></div>
                    </div>

                    <div className='viwe' style={{ transform: `translateX(${-pos * 96}%)` }}>
                        <div className='card'>
                            <video autoPlay muted loop playsInline src={Silent}></video>
                            <div className='info'>
                                <p>Silent hill</p>
                                <img className='creat' src={Konami} alt="" />
                            </div>
                        </div>
                        
                        <div className='card'>
                            <video autoPlay muted loop playsInline src={The}></video>
                            <div className='info'>
                                <p>The last of us</p>
                                <img className='creat' src={Dog} alt="" />
                            </div>
                        </div>
                        <div className='card'>
                            <video autoPlay muted loop playsInline src={Hollow}></video>
                            <div className='info'>
                                <p>Hollow Knight</p>
                                <img className='creat' src={Cherry} alt="" />
                            </div>
                        </div>
                        
                    </div>
                </div>



                <div className='conteineri'>
                    <div className='in'>
                        <img src={Thef} alt="" />
                        <div className='infn'>
                            <p>The last of us II</p>
                            <button onClick={()=> nav("/Detalhes/the_last_of_us_II")}>Ver mais</button>
                        </div>
                    </div>

                    <div className='in'>
                        <img src={Blood} alt="" />
                        <div className='infn'>
                            <p>Bloodborne</p>
                            <button onClick={()=> nav("/Detalhes/Bloodborne")}>Ver mais</button>
                        </div>
                    </div>

                    <div className='in'>
                        <img src={DarkII} alt="" />
                        <div className='infn'>
                            <p>Dark souls II</p>
                            <button onClick={()=> nav("/Detalhes/Darksouls2")}>Ver mais</button>
                        </div>
                    </div>
                </div>

                <div className='conteineri'>
                    <div className='in'>
                        <img src={DarkIII} alt="" />
                        <div className='infn'>
                            <p>Dark souls III</p>
                            <button onClick={()=> nav("/Detalhes/Darksouls3")}>Ver mais</button>
                        </div>
                    </div>

                    <div className='in'>
                        <img src={ElderR} alt="" />
                        <div className='infn'>
                            <p>Elden ring</p>
                            <button onClick={()=> nav("/Detalhes/Eldenring")}>Ver mais</button>
                        </div>
                    </div>

                    <div className='in'>
                        <img src={Daysgone} alt="" />
                        <div className='infn'>
                            <p>Days gone</p>
                            <button onClick={()=> nav("/Detalhes/Daysgone")}>Ver mais</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Home;