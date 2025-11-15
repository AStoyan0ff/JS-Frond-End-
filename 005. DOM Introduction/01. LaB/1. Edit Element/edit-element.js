function editElement(htmlElement, match, replace) {
    // TODO
    let htmlContent = htmlElement.textContent;

    htmlContent = htmlContent.replaceAll(match, replace);
    htmlElement.textContent = htmlContent;
}