import { useEffect, useState } from "react";
import {getSingleArticleComments, getSingleArticle} from "../../utils/api"
import {Image, Card, Button, Container, Badge, Spinner} from 'react-bootstrap'


function CommentsList ({ id }) {
    const [isCommentsLoading, setIsCommentsLoading] = useState(false);
    const [articleComments, setArticleComments] = useState([]);
    useEffect(() => {
        setIsCommentsLoading(true);
        getSingleArticleComments(id).then((articleCommentsFromApi) => {
            setArticleComments(articleCommentsFromApi);
            setIsCommentsLoading(false);
        })
    }, [])

    return (
        <Container>
        {isCommentsLoading ?
            (<div>
            <h1>Loading...</h1>
            <Spinner animation="border" size="xxl"/>
            </div>) : 
            (articleComments.length > 0 ?
            (articleComments.map((comment) => {
                return (
                    <Card key={comment.comment_id}>
                    <Card.Header as="h5">Comment</Card.Header>
                    <Card.Body>
                      <Card.Title>{comment.body}</Card.Title>
                      <Card.Text>
                        By : {comment.author}
                      </Card.Text>
                      <Button variant="dark">Vote</Button>
                      <Badge bg="secondary">Number of votes : {comment.votes}</Badge>
                    </Card.Body>
                    </Card>
                )
            })) : <h3>No comments on this</h3> )
        }
        <Button variant="dark">Post a comment</Button>
        </Container>      
    )
}

export default CommentsList