import ArticlesGrid from "./subcomponents/ArticlesGrid";
import ArticlesFilterSection from "./subcomponents/ArticlesFilterSection";

function ArticlesListPage ({ articlesList }) {
    return (
        <div>
            <h1>This is the ArticlesListPage</h1>
            <ArticlesFilterSection />
            <ArticlesGrid articlesList={articlesList}/>
        </div>
    )
}

export default ArticlesListPage;