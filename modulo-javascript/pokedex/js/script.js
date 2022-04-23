/*        let quantidadePokemons = document.getElementById('quantidade');
        quantidadePokemons.addEventListener('keyup', ()=>{
            pegaPokemonsQuantidade(quantidadePokemons.value);
        });
*/
pegaPokemonsQuantidade(151);
        
function pegaPokemonsQuantidade(quantidade) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(Response => Response.json())
    .then(allpokemon => {

        let pokemons = [];
        
        allpokemon.results.map((val)=>{
            

            fetch(val.url)
                .then(Response => Response.json())
                .then(pokemonSingle => {
                    pokemons.push({nome:val.name, imagem:pokemonSingle.sprites.front_default});    

                    if(pokemons.length == quantidade){
                        
                        let pokemonBoxes = document.querySelector('.pokemon-boxes');
                        pokemonBoxes.innerHTML == "";

                        console.log(pokemons);
                        pokemons.map((val)=>{
                            pokemonBoxes.innerHTML+= `
                            
                            <div class="pokemon-box">
                                <img src=" `+ val.imagem +` " />
                                <p>` + val.nome + `</p>
                            </div>

                            `;

                            })
                        }
                    })
        })
    })
}