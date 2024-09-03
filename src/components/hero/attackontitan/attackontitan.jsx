import { ImgAttackontitan, ImgAttackontitanPlay, SvgImdb, SvgAge18, SvgArrow1 } from '../..'

function onepiece() {
    return (
    <>
        <div className='block__1'>
            <h1>Attack on Titan</h1>
        </div>
        <div className='block__2'>
            <img className="embla__slide__img" src={ImgAttackontitan} alt="Logo" />
        </div>
        <div className='block__3'>
            <div>
                <div className='info'>
                    <span><SvgAge18/></span>
                    <span><SvgImdb/>4.7</span>
                    <span>Sub | Dub</span>
                    <span>Thriller</span>
                    <span>Action</span>
                </div>
                <p>Known in Japan as Shingeki no Kyojin, many years ago, the last remnants of humanity were forced to retreat behind the towering walls of a fortified city to escape the massive, man-eating Titans that roamed the land outside their fortress. Only the heroic members of the Scouting Legion dared to stray beyond the safety of the walls – but even those brave warriors seldom returned alive.</p>
            </div>
        </div>
        <div className='block__4'>
            <img className="embla__slide__img" src={ImgAttackontitanPlay} alt="Logo" />
        </div>
        <div className='block__5'>
            <h2>Start watching</h2>
            <p>Watch Eren's adventure of saving the lives of the people from his country for the evil within.</p>
            <SvgArrow1/>
        </div>
    </>
    )
}

export default onepiece