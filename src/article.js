const createAndAppendArticleTo = (staticBodyHtml, appendToElement) => {
    const articleFragment = document.createDocumentFragment();
    const articleElement = document.createElement("article");
    const articleBody = `<div class="article-body">${staticBodyHtml}</div>`;

    articleElement.innerHTML = `
        <div class="article markdown-body github">
            ${articleBody}
        </div>
    `;

    articleFragment.appendChild(articleElement);
    return appendToElement.appendChild(articleFragment);
};

export default createAndAppendArticleTo