// STYLES
import './Article.scss'

// IMAGES
import gra from '../images/gra.png';



export default function Article(props: {
    link: string | undefined,
    image: string | undefined,
    team: string | undefined,
    time: string | undefined,
    title: string | undefined
}) {
    return (
        <div className="article">
            <a href={`/artykuly/${props.link}`}>
                <section className='img' style={{backgroundImage: `url(${gra.src})`}}></section>
                <section className="text">
                    <section className="type">
                        <p className='team'>{props.team}</p>
                        <p className='separator'>•</p>
                        <p className="time">Wczoraj</p>
                    </section>
                    <header className="title">
                        {props.title}
                    </header>
                </section>
            </a>        
        </div>
    )
}