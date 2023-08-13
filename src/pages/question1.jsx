import React, { useState , useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar"
import { useElementOnScreen } from "../utils/useElementOnScreen";
import laptopB from "../assets/images/blue-laptop.webp";


function CardQuestionEnd () {

    const [containerRefCardEnd, isVisibleCardEnd] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
    })
    
    const [shouldStayVisibleCardEnd, setShouldStayVisibleCardEnd] = useState(false);

    useEffect(() => {
        
        if (isVisibleCardEnd) {
            setShouldStayVisibleCardEnd(true)
        }
      }, [isVisibleCardEnd]);

    return <div ref={containerRefCardEnd} className="card_back_question_end flex flex-col sm:flex-row justify-evenly items-center my-24">
                    <div className={`card1 mb-10 sm:mb-0 w-5/6 sm:w-1/3 ${shouldStayVisibleCardEnd ? "active_card" : null}`}>
                        <div className="flex justify-center items-center">
                            <i className="fa-solid fa-photo-film fa-3x p-5 text-red-500"></i>
                        </div>
                        <h3 className="text-center mt-3">coût moyen d'une attaque</h3>
                        <p className="my-4 pb-7 sm:mx-6 lg:mx-6 sm:my-4 xl:mx-24 xl:pb-12 text-center">Le coût moyen d’une attaque cyber en 2021 se monte à 6 700 euros pour une TPE et
                            plus de 51 000 euros pour une PME.</p>
                    </div>
                    <div className={`card2 w-5/6 sm:w-1/3 ${shouldStayVisibleCardEnd ? "active_card" : null}`}>
                        <div className="flex justify-center items-center">
                            <i className="fa-solid fa-network-wired fa-3x p-5 text-red-500"></i>
                        </div>
                        <h3 className="text-center mt-3">fin du match</h3>
                        <p className="my-4 pb-7 sm:mx-6 lg:mx-6 sm:my-4 xl:mx-24 xl:pb-12 text-center">60% des PME/PMI impactées par les cyberattaques ont mis la clé sous la porte sous 18 mois…</p>
                    </div>
                </div>
}
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
                <i className="fa-solid fa-photo-film fa-3x p-5"></i>
            </div>
            <h3 className="text-center mt-12">{title} </h3>
            <p className="my-4 pb-7 sm:mx-6 lg:mx-12 sm:my-4 xl:mx-24 xl:pb-12 text-center">{text}</p> 
        </div>
    </div>

}
function TextLeft ({icone, title, text}) {

    return <div className="text_bloc sm:w-5/6 sm:mx-auto flex flex-col justify-center items-start m-3 sm:m-12">
        <div className="flex flex-col sm:flex-row ustify-center items-center">
            <i className={`fa-solid ${icone} mx-24`}></i>
            <h3 className="text-center">{title}</h3>
        </div>
        <p className="text-center text-left my-4 sm:m-12">{text}</p>
    </div>
}
function TextRight ({icone, title, text}) {

    return <div className="text_bloc w-5/6 mx-auto flex flex-col justify-center items-end m-12">
        <div className="flex flex-col sm:flex-row justify-center items-center">
            <h3 className="order-2 sm:order-1 text-center">{title}</h3>
            <i className={`fa-solid ${icone} mx-24 order-1 sm:order-2`}></i>
        </div>
        <p className="text-center text-left my-4 sm:m-12">{text}</p>
    </div>
}

export default function Question1 () {

    return <React.Fragment>
        <Navbar background={true}/>
        <section className="question_1">
            <div className="header_question w-full flex justify-center items-center">
                <h1 className="text-center">Pourquoi souscrire à une assurances cyber ?</h1>
            </div>
            <div className="border border-black w-2/5 mx-auto m-12"></div>
            <div className="intro m-2 sm:m-12">
                <div className="flex flex-col md:flex-row justify-evenly items-center">
                    <img className="w-full sm:w-3/5 md:w-2/5 lg:w-1/4 order-2 md:order-1" src={laptopB} alt="blue digital laptop" />
                    <p className="w-full md:w-2/4 order-1 md-order-2 text-center sm:text-left">L’assurance cyber est une forme d’assurance destinée à protéger les entreprises contre les risques liés aux technologies de l’information et de la communication.
                        Elle couvre les dommages causés par des cyberattaques, des violations de données, des perturbations de la continuité de l’activité et des responsabilités découlant de ces incidents.
                        Le besoin d’une assurance cyber est de plus en plus pressant à mesure que les entreprises sont de plus en plus dépendantes de la technologie et que le risque de cyberattaques augmente.
                        L’assurance cyber peut aider à couvrir les coûts liés aux pertes financières, aux frais de réparation, aux frais de notification de clients et aux frais de consultation juridique.
                        Il existe de nombreuses options d’assurance cyber sur le marché, chacune ayant ses propres couvertures et exclusions. Il est important de prendre le temps de comprendre les différentes
                        options disponibles et de choisir une assurance qui convient le mieux aux besoins de votre entreprise. Il peut également être utile de travailler avec un courtier ou un conseiller en assurance 
                        pour vous aider à naviguer dans les différentes options et à trouver une couverture adéquate.</p>
                </div>
                <div className="sm:m-12 text-center sm:text-left">
                    <p>En fin de compte, l’assurance cyber est essentielle pour protéger votre entreprise contre les risques liés aux technologies de l’information et de la communication. Elle peut vous aider à faire
                        face aux coûts liés à une cyberattaque ou à une autre crise informatique et à préserver votre réputation et votre crédibilité. En tant qu’entreprise, il est important de prendre en compte
                        l’importance de l’assurance cyber et de l’intégrer dans votre stratégie de gestion des risques.
                        L’ANSSI ( l’Agence Nationale de la Sécurité des Systèmes d’Informations ) classifie le risque cyber selon 4 grands types d’attaques cyber :</p>
                    <ul className="list-disc mx-12 my-5">
                        <li>la cybercriminalité,</li>
                        <li>l’atteinte à l’image,</li>
                        <li>l’espionnage,</li>
                        <li>et le sabotage.</li>
                    </ul>
                    <p>La cybercriminalité est la catégorie reine des cyberattaques depuis 2020, notamment le rançongiciel (ransomware) ou l’hameçonnage (phishing).
                    La France est actuellement un des pays les plus touchés par ce type d’attaque, au regard du parquet de Paris qui a vu le nombre des saisines multiplié par 5 en 2020.</p>
                </div>
            </div>
            <div className="cyberattaque py-9">
                <h2 className="text-center w-full lg:w-3/4 mx-auto">Comment l’assurance accompagne votre entreprise en cas de cyberattaque ?</h2>
                <p className="text-center w-4/5 mx-auto m-2 sm:m-12">Dés que l’entreprise fait le choix de s’assurer contre le risque cyber, il est important qu’elle signale à son assureur tout incident afin de permettre la prise en charge financière des
                    différents intervenants telle qu’une équipe d’experts qui vous assistera dans la gestion de crise et la remise en fonctionnement de votre système informatique pour éviter des attaques futures.</p>
                <CardQuestion title={"Les coups directs"} text={"Une Cyberattaque peut engendrer des coûts directs importants qui dépendront de l’ampleur de l’attaque mais aussi de la maturité cyber de l’entreprise attaquée, de sa capacité à mettre en les meusres necessaires afin d’en limiter les impact. Parmis ces coûts, nous pouvons citer:"} />
            </div>
            <div>
                <TextLeft icone={"fa-envelope-open-text"} title={"Les notifications de l’intrusion aux clients"} text={"A la suite d’une attaque, les entreprises sont tenues d’alerter rapidement les clients si des données “susceptibles d’engendrer un risque élevé pour les droits et libertés des personnes physiques” ont été potentiellement compromises. Cette obligation découle du Règlement Général sur la Protection des Données Personnelles (RGPD). Il en résulte des frais de notification, estimés à 7€ / donnée. À ce coût peut s’ajouter la mise en place d’une hotline pour traiter les demandes et les questions des clients."} />
                <TextRight icone={"fa-lock"} title={"La sécurisation des données post-incident"} text={"Une fois la cyberattaque contenue, il convient de sécuriser l’ensemble des données, en commençant par les plus sensibles. Formatage ou décontamination en profondeur des postes de travail et serveurs, restauration des données, réalisation et stockage de nouvelles sauvegardes, changement de l’intégralité des mots de passe… sont des mesures à adopter rapidement une fois les enquêtes et recueil de preuves effectués."} />
                <TextLeft icone={"fa-satellite-dish"} title={"Les relations publiques"} text={"Si votre entreprise a subi une fuite de données très conséquente, la meilleure des postures est d’opter pour la transparence en prenant les devants en matière de communication. Les relations publiques sont un exercice délicat qui ne s’improvise pas, il est donc important de bien s’entourer. Cela constitue une dépense supplémentaire mais permet de limiter les dégâts en matière d’image."} />
                <TextRight icone={"fa-scale-balanced"} title={"La mise en conformité reglementaire"} text={"À la suite d’une cyberattaque, il convient de pallier les manquements qui ont eu lieu et de se mettre en conformité avec les différentes législations en vigueur, à commencer par le RGPD. Pour ce faire, il convient de réaliser un audit, de cartographier les ajustements à apporter, ou encore de mettre à jour les contrats et les CGU / CGV."} />
                <TextLeft icone={"fa-gavel"} title={"Les honoraires d’avocats et frais de justice"} text={"La plupart des entreprises préfèrent être accompagnées d’un avocat pour effectuer les différentes démarches juridiques, dont le dépôt de plainte. Celui-ci aboutira au déclenchement d’une enquête qui permettra, dans certains cas, le démantèlement de la filière criminelle. Les frais à engager dépendent de la protection juridique choisie par votre entreprise."} />
                <TextRight icone={"fa-shield-halved"} title={"L’amélioration des dispositifs de cybersécurité"} text={"Pour protéger votre entreprise, il est important de renforcer vos dispositifs en matière de cybersécurité. Renforcement de la sécurité de chacun des points d’exposition, en commençant par les équipements qui ont accès aux données, chiffrement de vos données sensibles, gestion stricte des accès, renouvellement des mots de passe, formation du personnel… Ces actions permettront à votre TPME de se protéger des cybermenaces."} />
            </div>
            <div className="cyberattaque py-9">
                <CardQuestion title={"les coups indirects"} text={"En plus des coûts directs que l’on perçoit immédiatement après la survenance d’une cyberattaque, certains coûts indirects sont susceptibles de peser sur l’entreprise. En fonction de son ampleur, une cyberattaque peut engendrer des coûts indirects plus ou moins importants :   necessaires afin d’en limiter les impact. Parmis ces coûts, nous pouvons citer:"} />
            </div>
            <div>
                <TextLeft icone={"fa-hourglass-half"} title={"la perturbation ou l’interruption des activités"} text={"Dans certains cas, une cyberattaque peut perturber voire interrompre l’activité de l’entreprise, pour un délai moyen de 3 à 7 semaines. Dans ce cas de figure, l’entreprise n’est plus en mesure de fonctionner correctement et est engagée dans une course contre la montre pour remettre son activité en service. La perturbation ou l’interruption totale des activités induit malheureusement des pertes financières pour l’entreprise qui la subit."} />
                <TextRight icone={"fa-user-secret"} title={"la perte de propriété intellectuelle"} text={"Les PME qui ont inventé des produits ou des services peuvent se faire dérober leur propriété intellectuelle en cas d’intrusion dans leur système informatique. Ces informations peuvent ensuite être revendues par les attaquants. Ces données sensibles doivent donc être sécurisées pour ne pas perdre la propriété du fruit de votre travail"} />
                <TextLeft icone={"fa-euro-sign"} title={"la dépréciation de la valeur de la marque"} text={"Les entreprises qui misent beaucoup sur l’image de la marque peuvent être impactées par l’attaque subie et constater une dépréciation de la valeur de leur entreprise dans certains cas précis. Par exemple, si vous envisagez de vendre votre entreprise, le fait d’avoir été victime d’une cyberattaque peut faire chuter son prix."} />
                <TextRight icone={"fa-handshake-simple-slash"} title={"la perte de confiance"} text={"Au préjudice financier provoqué par la cyberattaque peut s’ajouter une perte de confiance de la part de certains clients, voire des résiliations de contrats. Des répercussions sur le chiffre d’affaires peuvent donc avoir lieu. Il est important de communiquer rapidement et de manière transparente envers vos clients pour éviter qu’ils prennent connaissance de l’attaque d’une autre façon que par vous."} />
                <TextLeft icone={"fa-piggy-bank"} title={"l’augmentation du coût de la dette"} text={"Si votre entreprise a besoin d’un apport financier, il faut savoir que le fait d’avoir subi une cyberattaque peut accroître le coût de la dette. Ainsi, le taux de rentabilité exigé par les bailleurs sera plus élevé qu’auparavant."} />
            </div>   
            <CardQuestionEnd />
            <p className="text_end w-2/3 mx-auto text-center">ALORS??<br/>
                Etes-vous Résignés ou Résilients?<br/>
                Il n’est jamais trop tôt, mais il est souvent trop tard!<br/>
                Prenons rendez-vous, préparons-nous, sécurisez-vous!</p>
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
        </section>
        <Footer background={"white"}/>
    </React.Fragment>
}