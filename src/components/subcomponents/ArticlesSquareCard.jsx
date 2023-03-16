import { useState } from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ListGroup  from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function ArticlesSquareCard ({ article }) {
    const [articleCardDetails, setArticleCardDetails] = useState(article)
    return (
            <Card>
                <Card.Img variant="top" src={`${articleCardDetails.article_img_url}`} /> 
                <Card.Body>
                    <Card.Title>{articleCardDetails.title}</Card.Title>
                    <Card.Subtitle>By {articleCardDetails.author}</Card.Subtitle>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Votes : {articleCardDetails.votes}</ListGroup.Item>
                        <ListGroup.Item>Comments : {articleCardDetails.comment_count}</ListGroup.Item>
                        <ListGroup.Item>Date : {articleCardDetails.created_at.substring(0, 10)}</ListGroup.Item>
                    </ListGroup>
                    <Button variant="dark"><Link style={{ textDecoration: 'none', color: "white" }} to={`/id/${article.article_id}`}>Read more...</Link></Button>
                </Card.Body>
            </Card>
    )
}

export default ArticlesSquareCard;