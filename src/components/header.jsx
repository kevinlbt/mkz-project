
import Navbar from "./navbar"
import laptop from "../assets/images/laptop.png"

export default function Header () {

    return <header>
        <Navbar background={false}/>
        <div className="flex justify-evenly items-center">
            <div className="flex flex-col justify-center items-center w-3/4 sm:w-2/4">
                <h1 className="text-white">MKZ</h1>
                <h2 className="text-white">courtier en assurances entreprises & risque cyber</h2>
                <a href="/contact"><button className="m-8">
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                        <svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                        </svg>
                        </div>
                    </div>
                    <a href="/contact"><span>Nous contacter</span></a>
                </button></a>
            </div>
            <img src={laptop} alt="laptop digital draw" /> 
        </div>
    </header>
}