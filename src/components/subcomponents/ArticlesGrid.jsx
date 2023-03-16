import ArticlesSquareCard from "./ArticlesSquareCard";
import {Spinner, Col, Row, Container} from "react-bootstrap";
import { useState, useEffect } from "react";

function ArticlesGrid ({ articlesList, isLoading }) {
    const [isLoaded, setIsLoaded] = useState(isLoading)
    useEffect(() => {
        setIsLoaded(isLoading)
    }, [isLoading])
    return (
        <section>
            {isLoaded ? (
            <div>
                <h1>Loading...</h1>
                <Spinner animation="border" size="xxl"/>
            </div>
            ) :
            (<Container>
                <Row>
                {articlesList.map((article) => {
                    return (
                        <Col key={article.article_id}><ArticlesSquareCard key={article.article_id} article={article}/></Col>
                    )
                })}
                </Row>
            </Container>)
            }
        </section>
    )
}

export default ArticlesGrid;