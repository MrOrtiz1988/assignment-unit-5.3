console.log('***** Music Collection *****');



let collection = [];


function addToCollection(title, artist, yearPublished){

let song = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
};

collection.push(song);
console.log(collection[collection.length - 1]);
}

addToCollection('Yellow', 'Coldplay', 2000);
addToCollection('The Scientist', 'Coldplay', 2002);
addToCollection('White Iverson', 'Post Malone', 2016);
addToCollection('Candy Paint', 'Post Malone', 2018);
addToCollection('Wishing Well', 'Juice WRLD', 2020);
addToCollection('Righteous', 'Juice WRLD', 2020);
console.log(collection);