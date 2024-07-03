import { Hero } from "../";
  
const header = () => {
    return (
        <header className='bg-rgba( 255, 255, 255, 0.3 )'>
            <ul className='p-6 flex justify-center'>
                <li><a className="m-10" href='/'>Link 1</a></li>
                <li><a className="m-10" href='/'>Link 2</a></li>
                <li><a className="m-10" href='/'>Link 3</a></li>
                <li><a className="m-10" href='/'>Link </a></li>
            </ul>
            <Hero />
        </header>
    )
}

export default header