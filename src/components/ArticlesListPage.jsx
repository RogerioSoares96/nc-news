import ArticlesGrid from "./subcomponents/ArticlesGrid";
import ArticlesFilterSection from "./subcomponents/ArticlesFilterSection";

function ArticlesListPage ({ articlesList, isLoading }) {
    return (
        <div>
            <h1>News</h1>
            <ArticlesFilterSection />
            <ArticlesGrid articlesList={articlesList} isLoading={isLoading}/>
        </div>
    )
}

export default ArticlesListPage;