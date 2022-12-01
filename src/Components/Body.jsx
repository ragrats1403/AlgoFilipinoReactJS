import React from 'react';
import logo from '../images/body-img-1.png';
import Cards from './Cards';
import member1 from '../images/member-quote-1.png';
import member2 from '../images/member-quote-2.png';
import '../css/Body.css';
import Contactus from './Contactus';
function Body(){
    return(
        <>
        <div className="cons">
            <img src ={logo} />
            </div>       
        <div className="about-left-image">
            
            <div className="col-lg-6 align-self-center">
            <div className="section-heading">
                <div classname = "box">
                <div className="about-right-content">
                    
                    <h6>About Us</h6>
                    <h4>Algo <em>Filipino</em></h4>
                    <div className="line-dec"></div>
                    </div>
                    
                    <p className='aboutdetails'>Ang Algo Filipino ay itinatag ni John Jherlet Hollero noong Setyembre 27, 2020 sa edad na labing - siyam na taong gulang. Ito ay nagsimula sa ideya ng pagkakaroon ng kolaborasyon ng mga content creators sa iba’t ibang panig ng bansa sa larangan ng teknolohiya.</p>
                    
                    <p className='aboutdetails'>Ang organisasyong ito ay walang pinipili sa paggamit ng kahit anong programming language o ng isang tiyak na paksa sa teknolohiya na pabor sa mga teknikal na kurso. Naniniwala ang organisayson na maari ring magamit ang teknolohiya sa iba pang larangan ng pag aaral.</p>
                    
                </div>
                </div>
                </div>
                <div className="section-heading">
                    <div  className='ourteam'>
                    <h4>Our <em>Team</em></h4>
                    </div>
                    <div className="column-a">
                    <div className='team_image'>
                    <img src ={member1} />
                    </div>
                    <div className='column-b'>
                    <p>"Sa mga naiwan at patuloy na sumusuporta sa adbokasiya ng organisasyon, ako ay nagpapasalamat ng lubos at nasasabik sa mga susunod pang hakbang at kaganapan na maaring ihandog ng organisasyon para sa mga kabataan at mga Pilipinong naniniwala sa kalakasan ng wika sa pagyaman ng kultura, nasyonalismo at karunungan."</p>
                    </div>
                        <div className='team_name'>
                        <h4>
                        <em>JOHN JHERLET HOLLERO</em>
                        </h4>
                        <h6>FOUNDER</h6>
                        </div>
                        </div>
                    <div className='column-a'>
                    <div className='team_image'>
                    <img src = {member2} />
                    </div>
                    <div className='column-b'>
                    <p>"Ako ay nagagalak na maging parte ng organisasyon, naniniwala akong maipapalaganap pa organisasyon ang wika at teknolohiya sa mas marami pang Pilipino. Handa akong ibabahagi ang aking kaalaman at karanasan sa teknnolohiya sa mga susunod na henerasyon."</p>
                    </div>
                        <div className='team_name'>
                        <h4>
                        <em>WAREN GONZAGA</em>
                        </h4>
                        <h6>PRESIDENT</h6>
                        </div>
                        </div>
                    
                </div>
           
          </div>
          <Cards/>
          <Contactus/>
          </>


        
    )
}

export default Body