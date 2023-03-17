import axios from 'axios';

const marketAPI = axios.create({
    baseURL:'https://nc-news-api-lymv.onrender.com',
});

export const getArticles = () =>{
    return marketAPI.get('/api/articles').then(({data}) =>{
        return data.articles;
    })
}

export const getTopics = () =>{
    return marketAPI.get('/api/topics').then(({data}) =>{
        return data.topics;
    })
}

export const getSingleArticle = (id) => {
    return marketAPI.get(`/api/articles/${id}`).then(({data}) =>{
        return data.article;
    })
}

export const getSingleArticleComments = (id) => {
    return marketAPI.get(`/api/articles/${id}/comments`).then(({data}) =>{
        return data.article_comments;
    })
}

export const patchArticleVotes = (id) => {
    return marketAPI.patch(`/api/articles/${id}/`, {inc_votes : 1}).then(({data}) =>{
        return data.article;
    })
}