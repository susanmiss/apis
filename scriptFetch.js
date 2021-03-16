

const p = document.getElementById('todo-title');
fetch(`https://jsonplaceholder.typicode.com/users/1`)
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        showUser(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error));


const showUser = data => {
    const name = data.name
    const p = document.getElementById('todo-title');
    p.innerHTML = name
    console.log(name)
}


const displayPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(posts => {
            console.log(posts)
            showPosts(posts)
        })
}

showPosts = posts => {
    const divPosts = document.getElementById('posts')

    posts.map(post => {
        const postElement = document.createElement('h5');
        const spanElement = document.createElement('p');
        postElement.innerHTML = `${post.title}`;
        spanElement.innerHTML = `${post.body}`
        divPosts.append(postElement)
        divPosts.append(spanElement)
    })
}

displayPosts()

// const displayCharacters = async () => {
//     // const pp = document.getElementById('posts');
//     await fetch(`https://rickandmortyapi.com/api/character/`)
//         .then(response => response.json())
//         .then(characters => {
//             console.log(characters)
//             showCharacters(characters.results)
//         });
// }

// showCharacters = characters => {
//     const charactersDiv = document.querySelector('#rick-and-morty-characters');

//     characters.forEach(character => {
//         const characterElement = document.createElement('p');

//         characterElement.innerText = `Character Name: ${character.name}`;
//         charactersDiv.append(characterElement);

//     });
// }

// displayCharacters()

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);
        displayCocktail(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error));

function displayCocktail(data) {
    const cocktail = data.drinks[0];
    const cocktailDiv = document.getElementById("cocktail");

    const cocktailName = cocktail.strDrink;
    const heading = document.createElement("h1");
    heading.innerHTML = cocktailName;
    cocktailDiv.appendChild(heading);

}

