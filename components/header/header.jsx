import { Hero, Avatar1 } from "..";

const header = () => {
    return (
        <header>
            <nav className="z-[99] relative">
                <a href="/">Anime Paragon</a>
                <ul className='flex justify-center'>
                    <li><a className="m-7 p-1" href='/'>Series</a></li>
                    <li><a className="m-7 p-1" href='/'>Movies</a></li>
                    <li><a className="m-7 p-1 active" href='/'>Home</a></li>
                    <li><a className="m-7 p-1" href='/'>My List</a></li>
                    <li><a className="m-7 p-1" href='/'>News</a></li>
                </ul>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z" fill="#FFFFFF" />
                    </svg>
                    <a className="" href='/'>
                        <Avatar1 />
                    </a>
                </div>
            </nav>
            <Hero />
        </header>
    )
}

export default header