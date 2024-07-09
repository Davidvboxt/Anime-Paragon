import { Attackontitan, Jujutsukaisen, Onepiece } from '..'
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
    <section className='section__hero -mt-[160px] pt-[70px] z-[80] relative'>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">

          <div className='slide__background onepiece'>
            <div className='slide'>
              <div className="embla__slide slide__1">
                <Onepiece />
                <div className="embla__controls block__6">
                  <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
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
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
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
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
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
