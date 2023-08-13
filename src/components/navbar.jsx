import React, { useEffect, useRef,  useState } from 'react';
import logo from "../assets/logo/white-logo.png"

export default function Navbar ({background}) {

    const [menuAppear, setMenuAppear] = useState(false);
    const [questionMenuDisplay, setQuestionMenuDisplay] = useState(false);
    const [backDiplay, setBackDisplay] = useState(true);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setQuestionMenuDisplay(false);
        }
      };

    useEffect(() => {

        setBackDisplay(background)

    }, [setBackDisplay, background])

    useEffect (() => {

        // Ajouter l'événement click au document lorsque le composant est monté
        document.addEventListener("click", handleClickOutside);
        
        // Nettoyer l'événement lorsque le composant est démonté
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [])

    function handleAppearMenu () {

        setMenuAppear(v => !v)
    }

    function handleMenuQuestion () {

        setQuestionMenuDisplay(v => !v)
    }

    return <nav className={`navbar flex justify-between items-center ${backDiplay ? "other_nav" : "home_nav"}`}>
        <img src={logo} alt="logo" />
        <div ref={dropdownRef} className='desktop_menu w-full xl:w-2/3 flex justify-around items-center relative'>
            <ul className="visible_nav flex justify-center items-center">
                <li><a href="/">ACCUEIL</a></li>
                <li><a href="/apropos">A PROPOS</a></li>
                <li onClick={handleMenuQuestion}>QUESTION ?</li>
                <li><a href='https://www.rezhilience.fr/' target="_blank" rel="noopener noreferrer">REZHILIENCE</a></li>
            </ul>
            <a href="/contact"><button className='mr-5 lg:mr-12'>
                <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                    <a href="/contact"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                    </svg></a>
                    </div>
                </div>
                <a href="/contact"><span>Nous contacter</span></a>
            </button></a>
            <div className={`question ${questionMenuDisplay ? "active_question" : null}`}>
                <ul className='flex flex-col'>
                    <a className='mb-1' href="/question1"><li>Pourquoi souscrire à une assurances cyber ?</li></a>
                    <a href="/question2"><li>Quelles sont les missions du courtier en assurances ?</li></a>
                </ul>
            </div>
        </div>
        <i onClick={handleAppearMenu} className="fa-solid fa-bars fa-3x burger_menu mr-12 mt-2"></i>
        <div className={`mobile_menu p-16 ${menuAppear ? "active_menu" : null}`}>
            <i onClick={handleAppearMenu} className="fa-solid fa-xmark"></i>
            <ul className="flex flex-col justify-center items-center">
                <li><a href="/">accueil</a></li>
                <li><a href="/apropos">a propos</a></li>
                <li><a href="/question1">question ?</a></li>
                <li><a href='https://www.rezhilience.fr/' target="_blank" rel="noopener noreferrer">Rezhilience</a></li>
            </ul>
            <button className='mr-5 lg:mr-24'>
                <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                    <a href="/contact"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                    </svg></a>
                    </div>
                </div>
                <a href="/contact"><span>Nous contacter</span></a>
            </button>
        </div>
    </nav>
}