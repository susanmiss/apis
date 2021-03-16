var url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var drinks = JSON.parse(this.responseText);
        displayCocktail(drinks);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function displayCocktail(data) {
    const cocktail = data.drinks[0];
    const cocktailDiv = document.getElementById("cocktail");

    const cocktailName = cocktail.strDrink;
    const heading = document.createElement("h1");
    heading.innerHTML = cocktailName;
    cocktailDiv.appendChild(heading);
}


