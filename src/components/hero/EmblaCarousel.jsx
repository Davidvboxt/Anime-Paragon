
import { Onepiece, Attackontitan, Jujutsukaisen } from '../'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from "embla-carousel-autoplay";

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade(), Autoplay({ delay: 8000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className='section__hero -mt-[160px] pt-[70px] z-[80] relative'>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">

          <div className='slide__background onepiece'>
            <div className='slide'>
              <div className="embla__slide slide__1">
              <Onepiece />
                <div className="embla__controls block__6">
                  <div className="embla__buttons">
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
                </div>
              </div>
            </div>
          </div>
          <div className='slide__background jujutsukaisen'>
            <div className='slide'>
              <div className="embla__slide slide__3">
                <Jujutsukaisen />
                <div className="embla__controls block__6">
                  <div className="embla__buttons">
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
                </div>
              </div>
            </div>
          </div>
          <div className='slide__background attackontitan'>
            <div className='slide'>
              <div className="embla__slide slide__2">
                <Attackontitan /> 
                <div className="embla__controls block__6">
                  <div className="embla__buttons">
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
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
