$(document).ready(function () {
    var url = "https://jsonplaceholder.typicode.com/users/1";


    $(document).ready(function () {
        $.ajax(url,
            {
                success: function (data, status, xhr) {
                    console.log(data)
                    showUser(data)

                }
            });
    });


    function showUser(data) {
        const name = data.name
        $("#todo-title").text(name)
        console.log(name)
    }

});


$(document).ready(function () {
    var url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";


    $(document).ready(function () {

        $.ajax(url,
            {
                success: function (data, status, xhr) {
                    console.log(data)
                    displayCocktail(data)

                }
            });
    });


    function displayCocktail(data) {
        const cocktail = data.drinks[0];
        const cocktailDiv = document.getElementById("cocktail");

        const cocktailName = cocktail.strDrink;
        const heading = document.createElement("h1");
        heading.innerHTML = cocktailName;
        cocktailDiv.appendChild(heading);
    }

});


$(document).ready(function () {
    var url = "https://jsonplaceholder.typicode.com/posts";


    $(document).ready(function () {
        $.ajax(url,
            {
                success: function (data, status, xhr) {
                    console.log(data)
                    showPosts(data)
                }
            });
    });

    showPosts = posts => {
        const divPosts = $("#posts")
        // const divPosts = document.getElementById('posts')
        posts.map(post => {
            const postElement = document.createElement('h5');
            const spanElement = document.createElement('p');
            postElement.innerHTML = `${post.title}`;
            spanElement.innerHTML = `${post.body}`
            divPosts.append(postElement)
            divPosts.append(spanElement)
        })
    }
});



