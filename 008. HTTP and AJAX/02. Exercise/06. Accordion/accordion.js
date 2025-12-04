const mainSection = document.querySelector("section#main");

loadArt();

async function loadArt() {
    
    const getArticle = await fetch("http://localhost:3030/jsonstore/advanced/articles/list");
    const articles = await getArticle.json();

    for (const art of Object.values(articles)) {

        const articleDiv = document.createElement("div");
        articleDiv.classList.add("accordion");

        const div = document.createElement("div");
        div.className = 'div';

        const span = document.createElement('span');
        span.textContent = art.title;

        const btn = document.createElement('button');
        btn.className = 'button';
        btn.id = art._id;
        btn.textContent = "More";

        div.appendChild(span);
        div.appendChild(btn);

        articleDiv.appendChild(div);

        const articleContentDiv = document.createElement('div');
        articleContentDiv.classList.add('extra');

        articleDiv.appendChild(articleContentDiv);

        let isExpanded = false;

        btn.addEventListener("click", async () => {

            if (isExpanded) {
                
                articleContentDiv.innerHTML = "";
                articleContentDiv.style.display = "none";
                btn.textContent = "More";

            } else {

                const getArticleDetailsResponse = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${art._id}`);
                const articleDetails = await getArticleDetailsResponse.json();

                const articleContentParagraph = document.createElement("p");
                articleContentParagraph.textContent = articleDetails.content;

                articleContentDiv.appendChild(articleContentParagraph);
                articleContentDiv.style.display = "block";
                btn.textContent = "Less";
            }

            isExpanded = !isExpanded;
        });

        mainSection.appendChild(articleDiv);
    }
}    