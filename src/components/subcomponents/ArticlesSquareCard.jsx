import { useState } from "react";
import Card from "react-bootstrap/card"
import Button from "react-bootstrap/Button"
import ListGroup  from "react-bootstrap/ListGroup";

function ArticlesSquareCard ({ article }) {
    const [articleCardDetails, setArticleCardDetails] = useState(article)
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={`${articleCardDetails.article_img_url}`} /> 
                <Card.Body>
                    <Card.Title>{articleCardDetails.title}</Card.Title>
                    <Card.Subtitle>By {articleCardDetails.author}</Card.Subtitle>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Votes : {articleCardDetails.votes}</ListGroup.Item>
                        <ListGroup.Item>Comments : {articleCardDetails.comment_count}</ListGroup.Item>
                        <ListGroup.Item>Date : {articleCardDetails.created_at}</ListGroup.Item>
                    </ListGroup>
                    <Button variant="primary">Read more...</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ArticlesSquareCard;