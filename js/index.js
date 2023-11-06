function getCharacters(done){
    const results = fetch("https://rickandmortyapi.com/api/character");
    
    results
        .then(response =>response.json())
        .then(data => {
            done(data);
        });
}   

getCharacters(data => {

    data.results.array.forEach(character =>{

        const article = document.createRange().createContextualFragment(/*html*/`
        <article>
            <h2>${character.name}</h2>
            <br>
            <div class="CharactersDiv">
                <img src="${character.image}" alt="Character">
            </div>
            <br>
                <span>${character.status}</span>
                <br>
                <span>Last known location:</span>
                <br>
                <span>${character.location}</span>
        </article>
            
        `);

        const main = document.querySelector("main");

        main.append(article);
    });

});