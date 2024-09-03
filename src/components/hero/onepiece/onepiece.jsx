import { ImgOnepiece1, ImgOnepiecePlay, SvgImdb, SvgAge14, SvgArrow1 } from '../..'

function onepiece() {
    return (
    <>
        <div className='block__1'>
            <h1>One Piece</h1>
        </div>
        <div className='block__2'>
            <img className="embla__slide__img" src={ImgOnepiece1} alt="Logo" />
        </div>
        <div className='block__3'>
            <div>
                <div className='info'>
                    <span><SvgAge14/></span>
                    <span><SvgImdb/>4.9</span>
                    <span>Sub | Dub</span>
                    <span>Adventure</span>
                    <span>Action</span>
                </div>
                <p>One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 1997, with its individual chapters compiled into 99 tankōbon volumes as of June 2021. The story follows the adventures of Monkey D. Luffy.</p>
            </div>
        </div>
        <div className='block__4'>
            <img className="embla__slide__img" src={ImgOnepiecePlay} alt="Logo" />
        </div>
        <div className='block__5'>
            <h2>Start watching</h2>
            <p>Watch Luffy's adventure of finding the One Piece with his friends and fighting bad guys.</p>
            <SvgArrow1/>
        </div>
    </>
    )
}

export default onepiece