import createCard from "./card";
import createArticleAndAddTo from "./article";

import "./markdown.css";
import "./index.css";
import "./wasm.png";

const fetchArticle = (articleName) => import(`./articles/${articleName}.md`);

const createArticlesSection = (sectionId="Articles") => {
    const articleSectionFragment = document.createDocumentFragment();
    const articleSectionElement = document.createElement("div");
    
    articleSectionElement.id = sectionId;
    articleSectionFragment.appendChild(articleSectionElement);
    document.body.appendChild(articleSectionFragment);
    return articleSectionElement;
};

createCard(
    "Im learning Custom Loaders! This is awesome!", 
    "This course is made by Sean Larkin, one of the members of the webpack Core Team."
);

const articlesSection = createArticlesSection();

fetchArticle("number-one").then(htmlString => {
    debugger
    createArticleAndAddTo(htmlString, articlesSection);
});

fetchArticle("number-two").then(htmlString => {
    createArticleAndAddTo(htmlString, articlesSection);
});
