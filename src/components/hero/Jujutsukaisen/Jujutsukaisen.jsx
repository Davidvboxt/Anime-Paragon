import { ImgJujutsukaisen, ImgJujutsukaisenPlay, SvgImdb, SvgAge18, SvgArrow1 } from '../..'

function jujutsukaisen() {
    return (
    <>
        <div className='block__1'>
            <h1>Jujutsu Kaisen</h1>
        </div>
        <div className='block__2'>
            <img className="embla__slide__img" src={ImgJujutsukaisen} alt="Logo" />
        </div>
        <div className='block__3'>
            <div>
                <div className='info'>
                    <span><SvgAge18/></span>
                    <span><SvgImdb/>4.3</span>
                    <span>Sub | Dub</span>
                    <span>Magic</span>
                    <span>Action</span>
                </div>
                <p>Yuji Itadori eats a cursed finger to save a classmate, and now Ryomen Sukuna, a powerfully evil sorcerer known as the King of Curses, lives in Itadori’s soul. Curses are supernatural terrors created from negative human emotions. This cursed energy can be used as a power source by jujutsu sorcerers and cursed spirits alike.</p>
            </div>
        </div>
        <div className='block__4'>
            <img className="embla__slide__img" src={ImgJujutsukaisenPlay} alt="Logo" />
        </div>
        <div className='block__5'>
            <h2>Start watching</h2>
            <p>Follow young Yuji Itadori in this dark supernatural action series.</p>
            <SvgArrow1/>
        </div>
    </>
    )
}

export default jujutsukaisen