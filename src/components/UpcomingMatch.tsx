// IMAGES
import sokol from '../images/SokolLogo.png';
import slask from '../images/SlaskLogo.png';

// STYLES
import './UpcomingMatch.scss';

export default function UpcomingMatch() {

    function mobileView(){
        return (
            <div className='upcoming-match-mobile'>
                <p className='team'>Sokół Marcinkowice</p>
                <p className='team'>Śląsk Wrocław</p>
                <p className='league'>A Klasa</p>
                <div className='images'>
                    <img className='team-logo' src={sokol.src} alt='sokol'></img>
                    <img className='team-logo' src={slask.src} alt='slask'></img>
                </div>
                <a className='place' href='https://example.com' target='_blank'>Warszawa, Stadion Narodowy</a>
                <p className='date'>12:00 / 11.09</p>
            </div>
        )
    }

    function UpcomingMatch(){
        return (
            <>
                <div className="upcoming-match">
                    <div className="teams">
                        <div className="team">
                            <img src={sokol.src} alt="Logo klubu" />
                            <p>Sokół Marcinkowice</p>
                        </div>
                        <div className="team">
                            <img src={slask.src} alt="Logo klubu" />
                            <p>Śląsk Wrocław</p>
                        </div>
                    </div>
                    <div className="details">
                        <a href='https://example.com' target='_blank'>Warszawa, Stadion Narodowy</a>
                        <p>12:00 / 11.09</p>
                    </div>
                </div>
                <div className='upcoming-match-mobile'>
                    <p className='team'>Sokół Marcinkowice</p>
                    <p className='team'>Śląsk Wrocław</p>
                    <p className='league'>A Klasa</p>
                    <div className='images'>
                        <img className='team-logo' src={sokol.src} alt='sokol'></img>
                        <img className='team-logo' src={slask.src} alt='slask'></img>
                    </div>
                    <a className='place' href='https://example.com' target='_blank'>Warszawa, Stadion Narodowy</a>
                    <p className='date'>12:00 / 11.09</p>
                </div>
            </>
        )
    }

    return UpcomingMatch();
}