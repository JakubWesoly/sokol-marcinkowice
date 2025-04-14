
// STYLES
import './TrainerCard.scss'
export default function TrainerCard(props: {name: string, picture: string, description: string, link:string}) {
    return (
        <div className="trainer-card">
            <a href={"/trenerzy/" + props.link}>
            <img src={props.picture} alt="trener" />
            
            <div className="info">
                <p className='name'>{props.name.split(' ')[0]} <span className="last-name">{props.name.split(' ')[1]}</span></p>
                <p className='certificates'>{props.description}</p>
            </div>
            </a>
        </div>
    )
}