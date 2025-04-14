// STYLES
import './DetailedCamp.scss'

//IMAGES
import guestHouse from '../images/pensjonat.png';

export default function DetaitedCamp(props: {name: string, place: string, hotel:string, hotelImage:string, departure:string, departureHour:string, return:string, returnHour:string, firstPay:string, secondPay:string}) {
    function getFullDay(shortDate:string){
        var date = shortDate+'.'+new Date().getFullYear();
        const [day, month, year] =  date.split('.');
        return new Date(year+'-'+month+'-'+day).toLocaleDateString('pl', { weekday: 'long' }).toUpperCase();
    }
    
    return (
        <section className='detailed-camp'>
            <header className='detailed-camp-title'>
                <h2>Lato 2024</h2>
            </header>
            <section className='detailed-camp-place'>
                <h3 className='detailed-camp-place-title'>Mszana Dolna</h3>
                <div className='detailed-camp-place-subtitle'>
                    <p>Pensjonat&nbsp;</p>
                    <p>"Szczebel"</p>
                </div>
            </section>
            <section className='detailed-camp-image' style={{backgroundImage: `url(${guestHouse.src})`}}>
            </section>
            <section className='detailed-camp-time'>
                <h3 className='detailed-camp-time-title'>Wyjazd</h3>
                <i>O</i>
                <div>
                    <p>{getFullDay(props.departure)}</p>
                    <p>{props.departureHour}</p>
                </div>
            </section>
            <section className='detailed-camp-time'>
                <h3 className='detailed-camp-time-title'>Powrót</h3>
                <i>O</i>
                <div>
                    <p>{getFullDay(props.return)}</p>
                    <p>{props.returnHour}</p>
                </div>
            </section>
            <section className='detailed-camp-installment'>
                <h3 className='detailed-camp-installment-title'>Rata I</h3>
                    <p className='detailed-camp-installment-text'>{props.firstPay}</p>
            </section>
            <section className='detailed-camp-installment'>
                <h3 className='detailed-camp-installment-title'>Rata II</h3>
                    <p className='detailed-camp-installment-text'>{props.secondPay}</p>
            </section>
        </section>
    )
}