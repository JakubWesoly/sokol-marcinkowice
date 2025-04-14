// STYLES
import './Gallery.scss'

//COMPONENTS
import GalleryPhoto from './GalleryPhoto'
import type { Galleries } from '../pages/galeria/index.astro';
import { generateSlug } from '../lib/generateSlug';

export default function Gallery(props?: {GalleriesData?: Galleries[]}){

    function Gallery(){
        return (
            <>
                <section className='gallery'>
                    <section className='gallery-column'>
                        {
                            props?.GalleriesData?.map((gallery,index) => (
                                (index) % 3 == 0 &&
                                <GalleryPhoto photo={gallery.main_picture} text={gallery.name} position={index} link={generateSlug(gallery.name)}/>)
                            )
                        }
                    </section>
                    <section className='gallery-column'>
                        {
                            props?.GalleriesData?.map((gallery,index) => (
                                (index - 1) % 3 == 0 &&
                                <GalleryPhoto photo={gallery.main_picture} text={gallery.name} position={index} link={generateSlug(gallery.name)}/>)
                            )
                        }
                    </section>
                    <section className='gallery-column'>
                        {
                            props?.GalleriesData?.map((gallery,index) => (
                                (index - 2) % 3 == 0 &&
                                <GalleryPhoto photo={gallery.main_picture} text={gallery.name} position={index} link={generateSlug(gallery.name)}/>)
                            )
                        }
                    </section>
                </section>
                <section className='gallery-mobile'>
                    <section className='gallery-mobile-column'>
                        {
                            props?.GalleriesData?.map((gallery,index) => (
                                (index) % 2 == 0 &&
                                <GalleryPhoto photo={gallery.main_picture} text={gallery.name} position={index} link={generateSlug(gallery.name)}/>)
                            )
                        }
                    </section>
                    <section className='gallery-mobile-column'>
                        {
                            props?.GalleriesData?.map((gallery,index) => (
                                (index - 1) % 2 == 0 &&
                                <GalleryPhoto photo={gallery.main_picture} text={gallery.name} position={index} link={generateSlug(gallery.name)}/>)
                            )
                        }
                    </section>
                </section>
            </>
        )
    }

    return Gallery();
}