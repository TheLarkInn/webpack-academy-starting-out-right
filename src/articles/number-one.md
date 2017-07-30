# Number One Articel
Today I learned howto use `document.createDocumentFragment()`.

I found out that this one of the fatstest ways to apend elements to the `DOM`

Here is an examlpe of what it looks like: 
```javascript
const createAndAppendArticleTo = (header, staticBodyHtml, appendToElement) => {
    const articleFragment = document.createDocumentFragment();
    const articleElement = document.createElement("article");
    const articleHeader = `<h2 class="article-header">${header}</h2>`;
    const articleBody = `<div class="article-body">${staticBodyHtml}</div>`;

    articleElement.innerHTML = `
        <div class="article-inner">
            ${articleHeader}
            ${articleBody}
        </div>
    `;

    articleFragment.appendChild(articleElement);
    return appendToElement.appendChild(articleFragment);
};

export default createAndAppendArticleTo
```