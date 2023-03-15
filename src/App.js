import './App.css';
import ArticlesListPage from './components/ArticlesListPage';
import HeaderNav from './components/HeaderNav';
import { useState, useEffect } from 'react';
import { getArticles } from './utils/api';


function App() {

  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    getArticles().then((articlesListFromApi) => {
      setArticlesList(articlesListFromApi);
    })
  
  })
  return (
    <main className="App">
      <HeaderNav />
      <ArticlesListPage articlesList={articlesList}/>
    </main>
  );
}

export default App;
