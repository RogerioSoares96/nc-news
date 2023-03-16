import ArticlesGrid from "./subcomponents/ArticlesGrid";
import ArticlesFilterSection from "./subcomponents/ArticlesFilterSection";

function ArticlesListPage ({ articlesList, isLoading }) {
    return (
        <div>
            <h1>This is the ArticlesListPage</h1>
            <ArticlesFilterSection />
            <ArticlesGrid articlesList={articlesList} isLoading={isLoading}/>
        </div>
    )
}

export default ArticlesListPage;