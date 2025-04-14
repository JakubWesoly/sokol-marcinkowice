//IMAGES
import guestHouse from '../images/pensjonat.png';

// STYLES
import './CurrentCamp.scss'

export default function CurrentCamp(props: {name: string, place: string, hotel: string, hotelImage: string, departure:string, return:string , price: string}) {
    return (
        <section className='current-camp'>
            <header className='current-camp-title'>
                <h2>{props.name}</h2>
            </header>
            <section className='current-camp-place'>
                <h3 className='current-camp-place-title'>{props.place}</h3>
                <div className='current-camp-place-subtitle'>
                    <p>{props.hotel.split(' ')[0]}&nbsp;</p>
                    <p>{props.hotel.split(' ')[1]}</p>
                </div>
            </section>
            <section className='current-camp-image' style={{backgroundImage: `url(${props.hotelImage})`}}>
            </section>
            <section className='current-camp-date'>
                <p>{props.departure+'-'+props.return}</p>
            </section>
            <section className='current-camp-price'>
                <p>Cena: {props.price}</p>
            </section>
            <button className='current-camp-button'>
                <a href={'/oboz/'+props.name.toLowerCase().replace(' ','-')}>Zobacz więcej</a>
            </button>
        </section>
    )
}