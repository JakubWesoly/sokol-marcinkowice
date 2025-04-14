// STYLES
import './PhotoCarousel.scss'

//IMAGES

export default function PhotoCarousel(props: {images: Array<string>}){
    return (
        <section className='photo-carousel'>
            {
                props.images.map((image, index) => 
                    <img key={index} src={image} alt='Zdjecie' />
                )
            }
        </section>
    )
}