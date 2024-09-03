import EmblaCarousel from './EmblaCarousel'

const OPTIONS = { loop: true, duration: 30 }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Test() {


  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  )
}
