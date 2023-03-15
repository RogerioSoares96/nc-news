import ArticlesSquareCard from "./ArticlesSquareCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ArticlesGrid ({ articlesList }) {
    return (
        <div>
            <h1>This is Articles Grid</h1>
            <Container>
                <Row>
                {articlesList.map((article, index) => {
                    return (
                        <Col><ArticlesSquareCard key={`Article ${index}`} article={article}/></Col>
                    )
                })}
                </Row>
            </Container>
        </div>
    )
}

export default ArticlesGrid;