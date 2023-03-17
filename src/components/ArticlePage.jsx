import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, patchArticleVotes } from "../utils/api";
import { Image, Card, Button, Container, Badge, Spinner } from 'react-bootstrap'
import CommentsList from "./subcomponents/CommentsList";

function ArticlePage () {

    const { id } = useParams();
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [articleData, setArticleData] = useState({});
    const [articleVotes, setArticleVotes] = useState(0);
    const [error, setError] = useState(false);
    const [isVoted, setIsVoted] = useState(false);

    const handleVotesClick = (event) => {
        if (!isVoted) {
            event.preventDefault();
            setIsVoted(true)
            setArticleVotes(articleVotes + 1)
            patchArticleVotes(id)
            .catch((error) => {
                setError(error)
            })
        }
    };

    useEffect(() => {
        setIsDataLoading(true);
        getSingleArticle(id).then((articleFromApi) => {
            setArticleData(articleFromApi);
            setArticleVotes(articleFromApi.votes)
            setIsDataLoading(false);
        })
    }, [id])
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
                    <Card.Text>{articleData.topic}</Card.Text>
                    <Card.Text>
                        {articleData.body}
                    </Card.Text>
                    <Card.Text>
                        Votes : <Badge bg="secondary">{articleVotes}</Badge>
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