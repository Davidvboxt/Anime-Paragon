import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";


const popular = (props) => {

    // CAROUSEL
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    // ANIME API FETCH
    const [anime, setAnime] = useState([]);

    const { id } = useParams();

    const fetch = async () => {
        const data = await axios.get(
            `https://api.jikan.moe/v4/anime`
        );
        setAnime(data.data.data);
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <section className="section__popular">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">

                    {anime.map(all => (
                        <div className='embla__slide'>
                            <div className='carddes' key={all.mal_id}>
                                <div className='carddesImg'>
                                    <img src={all.images.jpg.large_image_url} alt='' />
                                </div>
                                <h1>{all.title}</h1>
                                <p>{all.synopsis}</p>
                            </div>
                        </div>
                    ))}

                </div>

                <button
                    className="embla__button embla__button--prev"
                    type="button"
                    onClick={scrollPrev}
                >
                    <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" stroke-width="1.104" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
                <button
                    className="embla__button embla__button--next"
                    type="button"
                    onClick={scrollNext}
                >
                    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="1.104" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>

            </div>
        </section>
    )
}

export default popular
