import React from 'react'

import Title from "../../containers/ArticleText/Title";
import PropTypes from "prop-types";
import Container from "../../containers/Container";
import ArticleBody from "./containers/ArticleBody";
import SplitArticle from "../../containers/Spliters/SplitArticle";
import ContainerTextRight from "../../containers/ArticleText/ContainerTextRight";



const ArticlePicLeft = ({title, image, body}) => {

    return (
        <Container>
            <SplitArticle
                reverseOrder
                primarySlot={
                    <ContainerTextRight>
                        <Title>{title}</Title>
                        <ArticleBody>{body}</ArticleBody>
                    </ContainerTextRight>
                }
                secondarySlot={
                    <img src={image} alt='bla'/>
                }
            />

        </Container>
    )

}
ArticlePicLeft.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    body: PropTypes.string
};

export default ArticlePicLeft