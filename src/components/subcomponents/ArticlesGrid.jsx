import ArticlesSquareCard from "./ArticlesSquareCard";
import {Spinner, Col, Row, Container} from "react-bootstrap";
import { useState, useEffect } from "react";

function ArticlesGrid ({ articlesList, isLoading }) {
    const [isLoaded, setIsLoaded] = useState(isLoading)
    useEffect(() => {
        setIsLoaded(isLoading)
    }, [isLoading])
    return (
        <div>
            <h1>This is Articles Grid</h1>
            {isLoaded ? (
            <div>
                <h1>Loading...</h1>
                <Spinner animation="border" size="xxl"/>
            </div>
            ) :
            (<Container>
                <Row>
                {articlesList.map((article, index) => {
                    return (
                        <Col><ArticlesSquareCard key={`Article ${index}`} article={article}/></Col>
                    )
                })}
                </Row>
            </Container>)
            }
        </div>
    )
}

export default ArticlesGrid;