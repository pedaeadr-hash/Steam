import './Home.css'
import { useState, useRef } from 'react'
import Logo from "../../assets/logo.png"
import The from "../../assets/thelast.mp4"
import Dog from "../../assets/Naughtydog.png"
import Cherry from "../../assets/cherry.png"
import Silent from "../../assets/silenthill.mp4"
import Konami from "../../assets/konami.png"





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
                            <video autoPlay muted loop playsInline src={The}></video>
                            <div className='info'>
                                <p>Hollow Knight</p>
                                <img className='creat' src={Cherry} alt="" />
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}
export default Home;