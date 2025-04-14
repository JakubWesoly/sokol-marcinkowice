// STYLES
import './Sponsors.scss'

//COMPONENTS

interface Sponsor{
    name:string,
    photo:string,
    sponsors_site?:string
}

export default function Sponsors(props?: {Sponsors?: Array<Sponsor>}){
        return (
            <section className='sponsor-section'>
                {props?.Sponsors?.map((sponsor) => <a href={sponsor.sponsors_site ? sponsor.sponsors_site : ""} target='_blank'><img src={sponsor.photo} alt={sponsor.name} /></a>)}
            </section>
        )
}