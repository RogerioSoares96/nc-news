import './App.css';
import ArticlesListPage from './components/ArticlesListPage';
import HeaderNav from './components/HeaderNav';
import { useState, useEffect } from 'react';
import { getArticles } from './utils/api';


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
      <ArticlesListPage articlesList={articlesList} isLoading={isLoading}/>
    </main>
  );
}

export default App;
