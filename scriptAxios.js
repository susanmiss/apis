
axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(function (response) {
        console.log(response.data)
        const data = response.data
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

