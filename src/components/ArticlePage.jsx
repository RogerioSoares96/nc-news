import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, patchArticleVotes } from "../utils/api";
import {Image, Card, Button, Container, Badge, Spinner} from 'react-bootstrap'
import CommentsList from "./subcomponents/CommentsList";

function ArticlePage () {

    const { id } = useParams();
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [articleData, setArticleData] = useState({});
    const [error, setError] = useState(false);

    const handleVotesClick = (event) => {
        event.preventDefault();
        patchArticleVotes(id).then((articleFromApi) => {
            setArticleData(articleFromApi)
        })
        .catch((error) => {
            setError(error)
        })
    };

    useEffect(() => {
        setIsDataLoading(true);
        getSingleArticle(id).then((articleFromApi) => {
            setArticleData(articleFromApi);
            setIsDataLoading(false);
        })
    }, [])
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
                        Votes : <Badge bg="secondary">{articleData.votes}</Badge>
                    </Card.Text>
                    {error ? <p>Could not update the Votes</p> :
                    <Button variant="dark" onClick={handleVotesClick}>Add a vote 👍</Button>}
                    <br></br>
                    <Card.Text>
                        By : {articleData.author}
                    </Card.Text>
                    <Card.Text>
                        Created At : {articleData.created_at}
                    </Card.Text>
                </Card.Body>
            </Card>)
            }
            <CommentsList id={id}/>
        </Container>        
    )
}

export default ArticlePage;