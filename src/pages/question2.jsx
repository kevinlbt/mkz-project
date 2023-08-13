import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar"
import { useElementOnScreen } from "../utils/useElementOnScreen";
import paperpen from "../assets/images/forme+icone.webp";

function CardQuestion ({title, text}) {

    const [containerRefCard, isVisibleCard] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    })
    
    const [shouldStayVisibleCard, setShouldStayVisibleCard] = useState(false);

    useEffect(() => {
        
        if (isVisibleCard) {
            setShouldStayVisibleCard(true)
        }
      }, [isVisibleCard]);

    return <div ref={containerRefCard} className="card_back_question flex flex-col sm:flex-row justify-evenly items-center mb-24 mt-12">
        <div className={`card1 mb-10 sm:mb-0 w-5/6 sm:w-4/6 lg:w-2/4 ${shouldStayVisibleCard ? "active_card" : null}`}>
            <div className="flex justify-center items-center">
                <i className="fa-solid fa-photo-film fa-3x p-5 text-blue-950"></i>
            </div>
            <h3 className="text-center mt-3">{title} </h3>
            <p className="my-4 pb-7 mx-3 sm:mx-6 lg:mx-12 sm:my-4 xl:mx-24 xl:pb-12 text-center">{text}</p> 
        </div>
    </div>

}

export default function Question2 () {

    return <React.Fragment>
        <Navbar background={true}/>
        <section className="question_2">
            <div className="header_question_2 w-full flex justify-center items-center">
                <h1 className="text-center m-5">Quelles sont les missions du courtier en assurances ?</h1>
            </div>
            <div className="border border-black w-2/5 mx-auto m-12"></div>
            <blockquote className="quotes_title text-center w-3/4 mx-auto">“ La mission principale d’un courtier en assurance est d’apporter les meilleurs conseils et proposer les meilleures offres existantes dans le marché des assurances “</blockquote>
            <div className="courtier_def w-5/6 xl:w-3/4 mx-auto flex flex-col sm:flex-row justify-center items-center my-6">
                <img className="w-4/6 sm:w-2/6 xl:w-1/5 m-12" src={paperpen} alt="icone paper and pen" />
                <p className="w-full text-center sm:text-left sm:w-3/5 m-12">Le courtier conseille son client dans le choix des garanties et la souscription des contrats d’assurance.
                Contrairement à un agent général d’assurance ou un conseiller commercial salarié d’une compagnie d’assurance, 
                le courtier représente ses clients de façon objective : il agit donc avec bien plus d’indépendance.</p>
            </div>
            <div className="courtier py-9">
                <CardQuestion title={"L'ORIAS"} text={"Un courtier en assurances est immatriculé auprès de l’ORIAS (Organisme pour le Registre des Intermédiaires en Assurance), le registre unique des intermédiaires en assurances. De plus, les courtiers en assurances exercent leur activité sous le contrôle de l’ACPR (Autorité de Contrôle Prudentiel et de Résolution) et est obligatoirement titulaire d’une assurance de Responsabilité Civile Professionnelle."}/>
                <CardQuestion title={"Le courtier"} text={"Enfin, les courtiers d’assurance adhèrent au principe de bonne foi absolue et font passer les intérêts de leur client avant ceux des compagnies d’assurances avec lesquelles il collabore!Plus qu’un simple prestataire, le courtier est un partenaire qui sert les intérêts de ses clients tout au long de la vie du ou des contrats signés.Un courtier est un intermédiaire entre son client et les assureurs partenaires, à ce titre, il va mettre en œuvre ses connaissances et son expertise pour identifier les risques à couvrir et trouver l’offre la plus adaptée et avantageuse pour son client par l’étude de son profil, de ses besoins."}/>
            </div>
            <div className="courtier_end sm:w-2/3 mx-auto flex flex-col justify-center items-center my-12">
                <i className="fa-solid fa-user-shield m-12 text-blue-950"></i>
                <p className="text-center text-left m-2 sm:m-0">Mk’Z est votre conseiller personnel, présent à tout moment en cas de questions ou doutes et nous nous chargeons de trouver la meilleure assurance selon vos souhaits et besoins, déterminerons ensemble quels sont les événements qui menacent votre activité et vous conseillerons sur chaque contrat d’assurance.<br/>
                Mk’Z est un professionnel indépendant. Grâce à notre expertise, nous serons en mesure d’identifier rapidement les offres disponibles sur le marché et allons sélectionner les contrats les plus adaptés pour répondre à vos besoins d’assurance.<br/>
                Nous négocions pour nos clients les meilleurs prix et conditions assurantielles possibles et nous intervenons également dans le processus de renégociation des assurances.<br/>
                En effet, notre mission à vos côtés ne s’arrête pas à la signature du contrat. Nous nous chargeons du suivi du contrat et nous pouvons également formuler des propositions à notre client quand nous identifions des nouvelles offres sur le marché ou lui fournir une aide lorsque l’assuré veut résilier son contrat.</p>
            </div>
            <div className="border border-black w-2/5 mx-auto m-12"></div>
            <div className="courtier_contact w-5/6 md:w-2/3 mx-auto flex flex-col justify-center items-center">
                <h3 className="text-center">Une question ? prenons rendez-vous !</h3>
                <i class="fa-solid fa-handshake text-blue-950 mt-6"></i>
                <a href="/contact"><button type="submit" className='mx-auto lg:mr-18 mt-12'>
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
            </div>
        </section>
        <Footer background={"white"}/>
    </React.Fragment>
}