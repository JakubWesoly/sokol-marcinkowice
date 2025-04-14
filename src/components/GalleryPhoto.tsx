// STYLES
import './GalleryPhoto.scss'

export default function GalleryPhoto(props: {photo: string, text: string, position: number, link: string}){
    function calculateHeight(n: number)
    {
        return Math.abs(Math.sin(n*7)*16*25);
    }

    function splitText(text: string)
    {
        return text.split(" ").map((item, index) => {
            return <p key={index}>{item}</p>
        })
    }


    return (
        <div className='gallery-photo'>
            <a key={props.link} href={`/galeria/${props.link}`}>
                <img src={props.photo} alt='weekend' style={{height: calculateHeight(props.position) + "px"}}></img>
                <div className='gallery-photo-text'>
                    {splitText(props.text).reverse()}
                </div>
            </a>
        </div>
    )
}
