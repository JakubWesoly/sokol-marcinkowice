// STYLES
import './LastCamp.scss'

export default function LastCamp(props: {name:string, place:string, hotel:string, groupPhoto:string, galleryLink: string}) {
    return (
        <section className='last-camp'>
            <header className='last-camp-title'>
                <h2>{props.name}</h2>
            </header>
            <section className='last-camp-place'>
                <h3 className='last-camp-place-title'>{props.place}</h3>
                <div className='last-camp-place-subtitle'>
                    <p>{props.hotel.split(' ')[0]}&nbsp;</p>
                    <p>{props.hotel.split(' ')[1]}</p>
                </div>
            </section>
            <section className='last-camp-image' style={{backgroundImage: `url(${props.groupPhoto})`}}>
            </section>
            <button className='last-camp-button'>
                <a href={'/galeria/' + props.galleryLink}>Zobacz Galerię</a>
            </button>
        </section>
    )
}