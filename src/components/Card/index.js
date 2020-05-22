import React from "react";
import PropTypes from "prop-types";

import Card from './containers/Card'
import Container from "../containers/Container";
import CardsContainer from "./containers/CardsContainer";
import CardImgRight from "./containers/CardImg/CardImgRight";
import CardTitleLeft from "./containers/CardTitle/CartTitleLeft";
import CardTextJustify from "./containers/CardText/CardTextJustify";




const CardComponent = ({cards}) =>
    <Container>
        <CardsContainer>
            {cards.map((c)=>(
            <Card className="mb-8">

                <CardImgRight>
                    {c.image}
                </CardImgRight>

               <CardTitleLeft>
                    {c.title}
               </CardTitleLeft>

               <CardTextJustify>
                    {c.body}
               </CardTextJustify>
            </Card>
            ))}
        </CardsContainer>
    </Container>


CardComponent.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string
};

export default CardComponent;
