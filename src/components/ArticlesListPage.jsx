import ArticlesGrid from "./subcomponents/ArticlesGrid";
import ArticlesFilterSection from "./subcomponents/ArticlesFilterSection";

function ArticlesListPage () {
    return (
        <div>
            <h1>This is the ArticlesListPage</h1>
            <ArticlesFilterSection />
            <ArticlesGrid />
        </div>
    )
}

export default ArticlesListPage;