
class CookBook {

}

class Recipe {
    constructor(title, components, description) {
        this.title = title;
        this.components = components;
        this.description = description;
    }
    // dlaczego nie może byc na odwrot?:
    // title = this.title;
    // components = this.components;
    // this.description = description;
    title = '';
    components = [];
    description = '';
    addRecipe() {
        console.log("add recipe");
    };
    modifyRecipe() {
        console.log("modify recipe");
    };
    removeRecipe() {
        console.log("remove recipe");
    }
}

function createNewRecipe() {
    // create new recipe
    let cake = new Recipe('Ciasto marchewkowe', 'marchewka', 'Piec godzine.'); 
    // <- dlaczego tu jest () skoro klasa recipe nie ma (). To jest to funkcja czy nie??
    // slowo new odpala construktor
    console.log(cake);

    let recipe = document.createElement('h2');
    recipe.classList.add('recipeHeading');
    recipe.innerHTML = cake.title;
    // document.body.appendChild(recipe); 
}
createNewRecipe();

let cookBook = document.getElementsByClassName('cookBook');
console.log(cookBook);
// cookBook.appendChild(recipe);
