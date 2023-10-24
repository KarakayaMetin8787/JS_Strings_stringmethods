function searcher(){
    const input = document.body.querySelector("#search-input");
    const article = document.body.querySelector("article");
    
    article.innerHTML = article.textContent.replaceAll(input.value, `<span>${input.value}</span>`);
    
    document.body.querySelector(`article span`).classList.add("highlight");
}