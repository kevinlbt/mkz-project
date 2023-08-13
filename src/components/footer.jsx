import { useEffect, useState } from "react"
import logo from "../assets/logo/white-logo.png"
import oiras from "../assets/images/BadgeOrias.webp"

export default function Footer ({background}) {

    const [backgroundFooter, setBackgroundFooter] = useState(false);

    useEffect(() => {
        if(background === "white") {
            setBackgroundFooter(false)
        }
        if(background === "darker") {
            setBackgroundFooter(true)
        }
    }, [setBackgroundFooter, background])

    return <footer>
        <div className="custom-shape-divider-top-1687202296">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={`${backgroundFooter ? "shape-fill-darker" : "shape-fill" }`}></path>
            </svg>
        </div>
        <section className="main_footer flex flex-col sm:flex-row justify-between items-center p-9 text-white pt-24">
            <div className="w-1/4">
                <img className="w-full h-auto" src={logo} alt="logo" />
            </div>
            <div>
                <h5 className="m-7 text-center">information</h5>
                <ul className="text-center">
                    <li><a href="/">accueil</a></li>
                    <a href="/question1"><li>Pourquoi souscrire à une assurances cyber ?</li></a>
                    <a href="/question2"><li>Quelles sont les missions du courtier en assurances ?</li></a>
                    <a href="/apropos"><li>a propos</li></a>
                    <a href="/conditions"><li>conditions génerales</li></a>
                </ul>
            </div>
            <div>
                <h5 className="m-7 text-center">nous contacter</h5>
                <ul className="text-center">
                    <a href="/contact"><li>contact</li></a>
                    <li>david.pageaux@mkz-assurance.fr</li>
                    <li>07 67 56 29 86</li>
                </ul>
            </div>
            <div className="pb-12">
                <h5 className="m-7 text-center">lien externe</h5>
                <ul className="text-center">
                    <li><a href='https://www.rezhilience.fr/' target="_blank" rel="noopener noreferrer">Rezhilience</a></li>
                </ul>
            </div>
            <div className="w-56 orias_div">
                <img className="w-full h-auto" src={oiras} alt="badge immatriculation orias" />
            </div>
        </section>
        <div className="mentions sm:ml-20">
            <ul className="flex text-white">
                <li className="p-2">@2023 mkz</li>
                <a href="/mentions-légales"><li className="p-2">mentions légales</li></a>
                <a href="/politique-de-confidentialité"><li className="p-2">politique de confidentialités</li></a>
            </ul>
        </div>
    </footer>
}