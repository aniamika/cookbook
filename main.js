// let {RandomPictureGenerator} = require('./RandomPictureGenerator')
// import {Picture} from './Picture.js';


class Picture {
    constructor(title, description, url) {
        this.title = title;
        this.description = description;
        this.url = url;
    }
}

class RandomPictureGenerator {
    pictures = [];
    addPicture(newPicture) {
        this.pictures.push(newPicture)
    };
    getRandomPicture(randomNumberGenerator) {
        const randomIndex = randomNumberGenerator(0, this.pictures.length-1);
        const randomPicture = this.pictures[randomIndex];
        return randomPicture;
    };
    getPictureByTitle() {

    };
} 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function() {



    let picturesList = new RandomPictureGenerator();


    let pictureZosia = new Picture (
        'zosia', 
        'zosia na spacerze z mama', 
        'https://bi.im-g.pl/im/a5/a8/18/z25857701IH,Czy-mozna-wyjsc-z-dzieckiem-na-spacer-.jpg'
    )
    let pictureLandscape = new Picture (
        'landscape', 
        'landscape in Poland', 
        'https://discovercracow.com/sites/all/pliki/styles/colorbox_obraz_powiekszony/public/obrazy_tekst/mountains-2532800_1920.jpg?itok=KLE6zJML'
    )
    let pictureAnimal = new Picture (
        'monkey', 
        'monkey in the ZOO', 
        'https://s28164.pcdn.co/files/Patas-Monkey-0076-1280x720.jpg'
    )

    picturesList.addPicture(pictureZosia);
    picturesList.addPicture(pictureLandscape);
    picturesList.addPicture(pictureAnimal);

    // button on click
    const generateButton = document.querySelector(".generateButton");
    
    const imagesContainer = document.querySelector(".imagesContainer");
    const singleImageContainer = document.createElement("li");
    singleImageContainer.classList.add("singleImageContainer");
    imagesContainer.appendChild(singleImageContainer);
    const image = document.createElement("img");
    image.classList.add("image");
    image.id = 'image';
    singleImageContainer.appendChild(image);

    generateButton.addEventListener("click", function() {
        const picture = document.getElementById("image");
        picture.src = picturesList.getRandomPicture(getRandomInt).url;
    });





};