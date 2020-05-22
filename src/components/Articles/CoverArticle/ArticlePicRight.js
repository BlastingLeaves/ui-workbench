import React from 'react'

import ContainerTextLeft from "../../containers/ArticleText/ContainerTextLeft";
import Title from "../../containers/ArticleText/Title";
import PropTypes from "prop-types";
import Container from "../../containers/Container";
import ArticleBody from "./containers/ArticleBody";
import SplitArticle from "../../containers/Spliters/SplitArticle";



const ArticlePicRight = ({title, image, body}) =>
        <Container>
            <SplitArticle
                primarySlot={
                    <ContainerTextLeft>
                        <Title>{title}</Title>
                        <ArticleBody>{body}</ArticleBody>
                    </ContainerTextLeft>
                }
                secondarySlot={
                    <img src={image} alt='bla'/>
                }
            />

        </Container>


ArticlePicRight.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    body: PropTypes.string
};

export default ArticlePicRight