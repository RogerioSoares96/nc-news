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