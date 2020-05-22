import React from 'react'
import PropTypes from "prop-types";

import Container from "../../containers/Container";
import Subtitle from "../../containers/ArticleText/SubTitle";
import LongArticleBody from "./containers/LongArticleBody";
import ContainerTextCenter from "../../containers/ArticleText/ContainerTextCenter";
import ContainerTextLeft from "../../containers/ArticleText/ContainerTextLeft";





const LongArticle = ({title, body}) =>
    <Container>
                <ContainerTextLeft>
                    <Subtitle>{title}</Subtitle>
                    <LongArticleBody>{body}</LongArticleBody>
                </ContainerTextLeft>
    </Container>


LongArticle.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
};

export default LongArticle