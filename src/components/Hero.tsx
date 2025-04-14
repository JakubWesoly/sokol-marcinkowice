// STYLES
import './Hero.scss'

//IMAGES
import pilka from "../images/pilka.png";
import stadion from "../images/stadion.png";

export default function Hero(){
    return (
        <section className='hero'>
            <div className="hero-background-image-mask">
                <img className='hero-background-image' src={stadion.src} alt='stadion'></img>
            </div>
            <div className='hero-content'>
                <div className='hero-top-gradient'></div>
                <div className='hero-small-rectangle side-rectangle'></div>
                <div className='hero-small-rectangle'></div>
                <div className='hero-big-rectangle'></div>
                <div className='hero-small-rectangle'></div>
                <div className='hero-small-rectangle side-rectangle'></div>
                <section className='hero-content-text'>
                    <h3>WITAMY W KLUBIE</h3>
                    <h2>SOKÓŁ</h2>
                    <h4>Marcinkowice</h4>
                </section>
                <div className='hero-content-ball'>
                    <img src={pilka.src} alt='pilka'></img>
                </div>
                <div className='hero-gradient'></div>
            </div>

        </section>
    )
}