import { Vinlandsaga, Demonslayer, Onepiece } from '..'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (

    <div className="embla" >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">

          <article className='slide__1 -mt-[70px] pt-[120px] z-[80] relative'>
            <div className='bg-gradient-to-br from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] backdrop-blur-[115px] -mt-[80px] pt-[90px] z-[90] relative w-100%'>
              <div className="embla__slide ">
                <Onepiece />
                <div className="embla__controls block__6">
                  <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='slide__2 -mt-[70px] pt-[120px] z-[80] relative'>
            <div className='bg-gradient-to-br from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] backdrop-blur-[115px] -mt-[80px] pt-[90px] z-[90] relative'>
              <div className="embla__slide ">
                <Vinlandsaga />
                <div className="embla__controls block__6">
                  <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='slide__3 -mt-[70px] pt-[120px] z-[80] relative'>
            <div className='bg-gradient-to-br from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] backdrop-blur-[115px] -mt-[80px] pt-[90px] z-[9 0] relative'>
              <div className="embla__slide ">
                <Demonslayer />
                <div className="embla__controls block__6">
                  <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                  </div>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </div>

  )
}

export default EmblaCarousel
