import React , { useEffect, useState } from "react";
import Header from "../components/header";
import { useElementOnScreen } from "../utils/useElementOnScreen";
import Footer from "../components/footer";
import logo from "../assets/logo/mkz-logo.png"

function Adnmkz () {

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    })
    const [shouldStayVisible, setShouldStayVisible] = useState(false);

    useEffect(() => {
        if (isVisible) {
          setShouldStayVisible(true);
        }
      }, [isVisible]);

    return <section className="adn flex flex-col justify-center items-center mb-12">
                <h3 className="uppercase m-2 sm:m-7 text-center">l'adn mkz</h3>
                <div ref={containerRef} className="flex justify-evenly items-center flex-wrap">
                    <div className={`w-full sm:w-1/3 flex flex-col justify-center items-center m-10 adn_left ${shouldStayVisible ? "active" : null}`}>
                        <i className="fa-solid fa-triangle-exclamation fa-6x"></i>
                        <h4 className="text-center m-8">PLUS FAIBLES SONT LES RISQUES, MEILLEURE EST L’ENTREPRISE</h4>
                        <p className="text-center leading-10 sm:p-5">Une parfaite analyse et gestion des risques en entreprise par les dirigeants permet de prendre conscience des menaces et des vulnérabilités de son organisation.
                        Identifier les risques et réduire son exposition par le déploiement d’une politique de gouvernance de prévention et de sécurisation  permet de ne transférer que les risques résiduels à l’assureur.</p>
                    </div>
                    <div className={`w-full sm:w-1/3 flex flex-col justify-center items-center m-10 adn_right ${shouldStayVisible ? "active" : null}`}>
                        <i className="fa-solid fa-handshake fa-6x"></i>
                        <h4 className="text-center m-8 sm:w-3/5">LA DIFFÉRENCE MKZ</h4>
                        <p className="text-center leading-10 sm:p-5">Notre spécialité réside dans cette approche préventive en Analyse et Prévention des risques coconstruite entre un responsable d’entreprise et son partenaire courtier en assurances.
                        Cette approche permet la souscription de garanties sur-mesure. En effet, les solutions assurantielles sélectionnées protègent des risques résiduels qui demeurent sur l’entreprise. </p>
                    </div>
                </div>
            </section>
}

function Accompagner () {

    const [containerRefCard, isVisibleCard] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
    })
    
    const [shouldStayVisibleCard, setShouldStayVisibleCard] = useState(false);

    useEffect(() => {
        
        if (isVisibleCard) {
            setShouldStayVisibleCard(true)
        }
      }, [isVisibleCard]);

      return  <section className="accompagner flex flex-col justify-center items-center">
                    <h3 className="mt-9 text-center">Accompagner l’innovation et la technologie</h3>
                    <div className="assurance flex justify-evenly items-center">
                        <div className="w-5/6 sm:w-2/4 xl:w-1/3">
                            <h4 className="sm:mx-5 my-10 text-center">ASSURANCE CYBER</h4>
                            <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left">
                                <i className="fa-regular fa-thumbs-up fa-2x m-5 p-4"></i>
                                <p className="leading-9 my-5">En tant que courtier, nous vous acompagnons dans la recherche et la sélection de votre assurance CYBER.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left">
                                <i className="fa-solid fa-briefcase fa-2x m-5 p-4"></i>
                                <p className="leading-9 my-5">Nous accompagnons tous les secteurs d’activité et toutes les tailles d’entreprises et adaptons les solutions à vos besoins.</p>
                            </div>
                            <a href="/question1"><button className="btn mx-auto mt-5">
                                en savoir plus 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15px" width="15px" className="icon">
                                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" stroke="#292D32" d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"></path>
                                </svg>
                            </button></a>
                        </div>
                        <img className="w-1/3" src={logo} alt="logo" />
                    </div>
                    <div ref={containerRefCard} className="card_back flex flex-col sm:flex-row justify-evenly items-center mb-24 mt-12">
                        <div className={`card1 mb-12 sm:mb-0 w-5/6 sm:w-1/3 ${shouldStayVisibleCard ? "active_card" : null}`}>
                            <div className="flex justify-center items-center">
                                <i className="fa-solid fa-photo-film fa-3x p-5"></i>
                            </div>
                            <p className="w-5/6 mx-auto text-center pt-8 sm:pt-12 lg:pt-16 pb-8">responsabilité civile des entreprises du conseil, du media, marketing et de la communication</p>
                        </div>
                        <div className={`card2 w-5/6 sm:w-1/3 ${shouldStayVisibleCard ? "active_card" : null}`}>
                            <div className="flex justify-center items-center">
                                <i className="fa-solid fa-network-wired fa-3x p-5"></i>
                            </div>
                            <p className="w-5/6 mx-auto text-center pt-8 sm:pt-12 lg:pt-16 pb-8">responsabilité civile de l'entreprise du domaine des systemes d'information, des reseaux de communication et de l'informatique</p>
                        </div>
                    </div>
                </section>
}

function Aussi () {

    return <section className="aussi flex flex-col mb-24">
        <h3 className="mx-auto m-12">Mais aussi ...</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
            <div className="w-2/5 flex flex-col items-center">
                <div className="element">
                    <i className="fa-solid fa-house-laptop fa-4x p-9"></i>
                </div>
                <p className="mt-6 text-center">responsabilité civile des entreprises et responsabilite du dirigeants autres secteurs d'activite.</p>
            </div>
            <div className="w-2/5 flex flex-col items-center">
                <div className="element">
                    <i className="fa-solid fa-city fa-4x p-9"></i>
                </div>
                <p className="mt-6 text-center">assurances des batiments et locaux professionnels.</p>
            </div>
            <div className="w-2/5 flex flex-col items-center">
                <div className="element">
                    <i className="fa-solid fa-house fa-4x p-9"></i>
                </div>
                <p className="mt-6 text-center">garantie decennale</p>
            </div>
            <div className="w-2/5 flex flex-col items-center">
                <div className="element">
                    <i className="fa-solid fa-building fa-4x py-9 px-12"></i>
                </div>
                <p className="mt-6 text-center">dommages ouvrage & multirisque immeuble</p>
            </div>
        </div>
    </section>
}

function Home() {

    return (
        <React.Fragment>
            <Header />
            <Adnmkz />
            <Accompagner />
            <Aussi />
            <Footer background={"white"}/>
        </React.Fragment>
    );
}

export default Home;
