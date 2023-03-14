import { useState } from "react";

function ArticlesSquareCard () {
    const placeholder = [1, 'Ipsis', 'Lorem', 'Epsum', '02/02/2023', 10, 50]
    const [articleCardDetails, setArticleCardDetails] = useState(placeholder)
    return (
        <div>
            <h1>This is Articles Square</h1>
            <h2>Id is {articleCardDetails[0]}</h2>
            <h2>title is {articleCardDetails[1]}</h2>
            <h2>author is {articleCardDetails[2]}</h2>
            <h2>date is {articleCardDetails[3]}</h2>
            <h2>Votes is {articleCardDetails[3]}</h2>
            <h3>img {articleCardDetails[4]}</h3>
            <h2>comment count {articleCardDetails[5]}</h2>
        </div>
    )
}

/*
{"article_id":34,
"title":"The Notorious MSG’s Unlikely Formula For Success",
"topic":"cooking",
"author":"grumpy19",
"body":"The 'umami' craze has turned a much-maligned and misunderstood food additive into an object of obsession for the world’s most innovative chefs. But secret ingredient monosodium glutamate’s biggest secret may be that there was never anything wrong with it at all.",
"created_at":"2020-11-22T11:13:00.000Z",
"votes":0,
"article_img_url":"https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
"comment_count":374} 
*/

export default ArticlesSquareCard;