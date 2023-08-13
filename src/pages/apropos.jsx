import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import david from "../assets/images/apropos.webp";
import april from "../assets/logo/april.png";
import dattak from "../assets/logo/dattak.png";
import finistere from "../assets/logo/finistere.png";
import marekel from "../assets/logo/marekel.png";
import stoik from "../assets/logo/stoik.png";
import tetris from "../assets/logo/tetris.png";
import zephir from "../assets/logo/zephir.png";

export default function Apropos () {

    return <section className="apropos">
        <Navbar background={true}/>
        <section className="pageaux pb-24">
            <h1 className="text-center md:text-left md:ml-44 md:pl-24 py-12">David <strong>pageaux</strong></h1>
            <div className="flex flex-col sm:flex-row justify-around items-center">
                <img className="w-2/4 sm:w-1/5" src={david} alt="a propos david pageaux" />
                <div className="sm:w-2/3">
                    <h2 className="my-2 text-center sm:text-left">Votre interlocuteur Mk'Z</h2>
                    <p className="my-12 text-center sm:text-left">Avec 20 ans d’expérience au sein d’un grand groupe d’assurances, j’ai créé Mk’Z Assurances;
                         société de conseils et de Courtage en Assurances afin de proposer aux TPE/PME une solution novatrice d’accompagnement
                         assurantiel basée sur une analyse de Risque globale et une spécialisation en Assurances Cyber. 
                    </p>
                    <p className="text-center">La devise Mk’Z : <strong>« Plus faibles sont les Risques, Meilleure est l’Entreprise. »</strong></p>
                </div>
            </div>
        </section>
        <div className="banner_apropos flex justify-center items-center">
            <i class="fa-solid fa-user-gear"></i>
        </div>
        <div className="apropos_pres mx-auto sm:w-4/5 text-center my-24">
            <p className="p-2 sm:p-0">
            Parce que chaque entreprise est différente, les garanties à souscrire doivent être adaptées.<br/><br/>
            Selon la taille de votre société, la nature de votre activité (profession libérale, artisan, commerçant…), votre chiffre d’affaire, le nombre de vos employés, votre exposition aux risques, votre environnement, nous vous proposerons des garanties sur mesure pour votre entreprise.<br/><br/>
            Avec vous, nous comparons les offres d’assurances professionnelles,  et ainsi vous pouvez choisir sereinement les garanties dont vous avez besoin.<br/><br/>
            En tant que courtier, nous avons choisi de travailler uniquement avec des compagnies d’assurances IARD et Cyber reconnues et spécialistes du monde de l’entreprise. <br/><br/>
            Ainsi, nous apportons des réponses sur mesure pour toutes les structures professionnelles, quels que soient leur secteur d’activité, leur chiffre d’affaires ou leur effectif.<br/><br/>
            </p>
        </div>
        <div className="partenaire">
            <h2 className="text-center py-5">Nos partenaires assureurs</h2>
            <div className="flex flex-wrap justify-center items-center">
                <img src={april} alt="april" />
                <img src={dattak} alt="dattak" />
                <img src={finistere} alt="finistere" />
                <img src={marekel} alt="marekel" />
                <img src={stoik} alt="stoik" />
                <img src={tetris} alt="tetris" />
                <img src={zephir} alt="zephir" />
            </div>
        </div>
        <Footer background={"darker"}/>
    </section>
}