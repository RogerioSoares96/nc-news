import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getSingleArticleComments, getSingleArticle} from "../utils/api";
import {Image, Card, Button, Container, Badge, Spinner} from 'react-bootstrap'


function ArticlePage () {

    const { id } = useParams();
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [isCommentsLoading, setIsCommentsLoading] = useState(false);
    const [articleData, setArticleData] = useState({});
    const [articleComments, setArticleComments] = useState([]);

    useEffect(() => {
        setIsDataLoading(true);
        getSingleArticle(id).then((articleFromApi) => {
            setArticleData(articleFromApi);
            setIsDataLoading(false);
        })
    }, [])
    useEffect(() => {
        setIsCommentsLoading(true);
        getSingleArticleComments(id).then((articleCommentsFromApi) => {
            setArticleComments(articleCommentsFromApi);
            setIsCommentsLoading(false);
        })
    }, [])
    console.log(articleComments)
    return (
        <Container>
            {isDataLoading ? 
                (<div>
                <h1>Loading...</h1>
                <Spinner animation="border" size="xxl"/>
                </div>) :
            (<Card>
                <Card.Header as="h1">{articleData.title}</Card.Header>
                <Image src={`${articleData.article_img_url}`} rounded/>
                <Card.Body>
                    <Card.Text><h3>{articleData.topic}</h3></Card.Text>
                    <Card.Text>
                        {articleData.body}
                    </Card.Text>
                    <Card.Text>
                        Votes : {articleData.votes}
                    </Card.Text>
                    <Card.Text>
                        By : {articleData.author}
                    </Card.Text>
                    <Card.Text>
                        Created At : {articleData.created_at}
                    </Card.Text>
                </Card.Body>
            </Card>)
            }
            {articleComments.map((comment) => {
                return (
                    <Card>
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
            })}
            <Button variant="dark">Post a comment</Button>
        </Container>        
    )
}

export default ArticlePage;