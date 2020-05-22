import React from "react";
import CardComponent from "../components/Card";
import AppIcon from "../components/Card/AppIcon";


const cardData = [
    {
        title: 'Inoveaza',
        image: <AppIcon/>,
        body: 'atat accesul la materiale audio cât și procesele tranzacționale de producere a acestora prin utilizarea unui mediu atât de dinamic cum este internetul.'
    },
    {
        title: 'Libereaza',
        image: <AppIcon/>,
        body: 'piața de servicii conexe domeniului, dând posibilitatea unei largi categorii de prestatori și angajatori de a-și prezenta și/sau contracta servicii din domeniu.'
    },
    {
        title: 'Stimuleaza',
        image: <AppIcon/>,
        body: 'o piață în creștere, prin facilitarea accesului editurilor mai mici la servicii de producție de audiobook-uri și alte servicii de text-to-audio.'
    }
];

const Card = () => <CardComponent cards={cardData}/>;


    export default Card