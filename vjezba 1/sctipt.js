

fetch("https://pokeapi.co/api/v2/pokemon-color/yellow")
.then(res => res.json())
.then(data => {

    const prvih20 = data.pokemon_species.slice(0, 20);
    prvih20.forEach(pokemon =>{
        console.log(pokemon.name);

        const pokemoni = prvih20.map(pokemon => ({
            name: pokemon.name,
            url: pokemon.url
        }));

        const source = document.getElementById("pokemon-list").innerHTML;
        const template = Handlebars.compile(source);

        const html = template ({pokemon: pokemoni});

        document.getElementById("pokemon-container").innerHTML = html;
    });
});


// Kako je nikola rijesio 

// let xhr = new XMLHttpRequest();
// xhr.open("GET","https://pokeapi.co/api/v2/pokemon-color/yellow", true);

// function fillList() {
//     const data = JSON.parse(xhr.responce);
//     const source = document.getElementById("pokemon-list").innerHTML;
//     const template = Handlebars.compile(source);
//     const context = {pokemon: data.pokemon_species.slice(0, 20)};
//     const html = template(context);

//     document.getElementById("result").innerHTML = html;
// }

// xhr.onload = function () {
//     fillList();

// }

// xhr.send();




// dodatni zadatak 

//  1. Uključite Bootstrap biblioteku u vašu stranicu sa prošle vježbe (CSS i JS).
// 2. Vašu tablicu pretvorite u Bootstrap tablicu.
// 3. Tablicu učinite responzivnom pomoću Bootstrapa tako da je u mobilnoj verziji vidljivo samo ime vrste bez rednog broja.
// 4. Na mobilnoj verziji dodajte popover element koji se pojavljuje na klik na ime vrste sa linkom na više informacija o vrsti.