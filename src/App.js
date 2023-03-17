import './App.css';
import ArticlesListPage from './components/ArticlesListPage';
import HeaderNav from './components/HeaderNav';
import ArticlePage from './components/ArticlePage';
import { useState, useEffect } from 'react';
import { getArticles } from './utils/api';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((articlesListFromApi) => {
      setArticlesList(articlesListFromApi);
      setIsLoading(false);
    })
  }, [])
  return (
    <main className="App">
      <HeaderNav />
      <Routes>
        <Route path='/' element={<ArticlesListPage articlesList={articlesList} isLoading={isLoading}/>} />
        <Route path='/articles/:id' element={<ArticlePage />} />
      </Routes>
    </main>
  );
}

export default App;
