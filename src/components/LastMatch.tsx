// IMAGES
import sokol from '../images/SokolLogo.png';
import slask from '../images/SlaskLogo.png';

// STYLES
import './LastMatch.scss';

export default function LastMatch() {

    function LastMatch(){
        return (
            <>
                <div className="last-match">
                    <div className="upper-top">
                        <p>A Klasa</p>
                        <div>
                            <p>Stadion Narodowy, Warszawa</p>
                            <p>12:00 / 11.09</p>
                        </div>
                    </div>
                    <div className="main-top">
                        <div className="team">
                            <img src={sokol.src} alt="logo klubu" />
                            <p>Sokół Marcinkowice</p>
                        </div>
                        <div className="score">
                            5-1
                        </div>
                        <div className="team">
                            <img src={slask.src} alt="logo klubu" />
                            <p>Śląsk Wrocław</p>
                            </div>
                    </div>
                    <hr/>
                    <div className="goals">
                            <ul>
                                <li>Maciej Kuświk 1’, 78’</li>
                                <li>Kacper Wróbel 35’, 44’ 86’</li>
                            </ul>
                        <ul>
                            <li>Erik Exposito 90’</li>
                        </ul>
                    </div>
                    {/* <div className="cta">
                        Zobacz relację
                    </div> */}
                </div>
                <div className='last-match-mobile'>
                    <div className='last-match-mobile-league'>
                        <p>A KLASA</p>
                    </div>
                    <div className='last-match-mobile-content'>
                        <p>Sokół</p>
                        <img src={sokol.src} alt='sokol'></img>
                        <p>5:0</p>
                        <img src={slask.src} alt='slask'></img>
                        <p>Śląsk</p>
                    </div>
                </div>
                <div className='last-match-mobile'>
                    <div className='last-match-mobile-league'>
                        <p>A KLASA</p>
                    </div>
                    <div className='last-match-mobile-content'>
                        <p>Sokół</p>
                        <img src={sokol.src} alt='sokol'></img>
                        <p>5:0</p>
                        <img src={slask.src} alt='slask'></img>
                        <p>Śląsk</p>
                    </div>
                </div>
                <div className='last-match-mobile'>
                    <div className='last-match-mobile-league'>
                        <p>A KLASA</p>
                    </div>
                    <div className='last-match-mobile-content'>
                        <p>Sokół</p>
                        <img src={sokol.src} alt='sokol'></img>
                        <p>5:0</p>
                        <img src={slask.src} alt='slask'></img>
                        <p>Śląsk</p>
                    </div>
                </div>
            </>
        );
    }

    return LastMatch();
}