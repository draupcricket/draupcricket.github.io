'use client'
import LightGallery from 'lightgallery/react';
import './Gallery.css'
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

const images = [
    { src: "/1.jpeg", alt: "Draup" },
    { src: "/5.jpeg", alt: "Draup", },
    { src: "/6.jpeg", alt: "Draup", },
    { src: "/15.jpeg", alt: "Draup", },
    { src: "/Team1.png", alt: "Draup" },
    { src: "/16.png", alt: "Draup", },
    { src: "/2.jpeg", alt: "Draup" },
    { src: "/7.jpeg", alt: "Draup", },
    { src: "/3.jpeg", alt: "Draup" },
    { src: "/13.jpeg", alt: "Draup", },
    { src: "/14.jpeg", alt: "Draup", },
    { src: "/17.png", alt: "Draup", },
]

export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >

                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img alt={image.alt} src={image.src} />
                        </a>
                    )
                })}


            </LightGallery>
        </div>
    );
}