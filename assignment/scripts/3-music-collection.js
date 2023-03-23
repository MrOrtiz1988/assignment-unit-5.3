console.log('***** Music Collection *****');

let collection = [];
let tracks = [
    [{name: 'Yellow', duration: '4:33'}, {name: 'Trouble', duration: '4:51'}, {name: 'Sparks', duration: '3:48'}], 
    [{name: 'The Scientist', duration: '5:10'}, {name: 'In My Place', duration: '3:47'}, {name: 'Clocks', duration: '5:08'}], 
    [{name: 'White Iverson', duration: '4:17'}, {name: 'Congratulations', duration: '3:40'}, {name: 'I Fall Apart', duration: '3:43'}], 
    [{name: 'Candy Paint', duration: '3:48'}, {name: 'Psycho', duration: '3:41'}, {name: 'Paranoid', duration: '3:42'}], 
    [{name: 'Wishing Well', duration: '3:15'}, {name: 'Righteous', duration: '4:02'}, {name: 'Conversations', duration: '3:02'}], 
    [{name: 'Burn', duration: '3:37'}, {name: 'Not Enough', duration: '2:52'}, {name: 'Relocate', duration: '3:28'}]
];

//addToCollection adds albums to collection array with objects
function addToCollection(title, artist, yearPublished, songs){
let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    songs: songs
};
collection.push(album);
console.log(collection[collection.length - 1]);
}

//show collection displays each collection formatted like: `TITLE by ARTIST, published in YEAR`.
function showCollection(array){
    for(i=0; i < array.length; i++){
        console.log(array[i].title + ' by ' + array[i].artist + ' published in ' + array[i].yearPublished + '.');
    }
}

//findByArtist acts as a mini search engine to find an artist and its contents on the console 
function findByArtist(artist, array){
    let results = [];
    for(i=0; i < array.length; i++){
        if(array[i].artist == artist){
            results.push(array[i]);
        }
    }
    console.log(results);
}



//search function searches a criteria from an array and returns all that matches, if no match is found then
//then an empty array is returned and if nothing is put in search then all items in array is returned 
function search(entry){
    let searched = [];
    
    for(i=0; i < collection.length; i++){
        if(collection[i].title === entry){
            searched.push(collection[i]);
        } else if (collection[i].artist === entry){
            searched.push(collection[i]);
        } else if (collection[i].yearPublished === entry){
            searched.push(collection[i]);
        } else if(!entry){
            return collection;
        } else if(collection[i].songs[0].name == entry){
            searched.push(collection[i].songs[0].name + ': ' + collection[i].songs[0].duration)
        } else if(collection[i].songs[1].name == entry){
            searched.push(collection[i].songs[1].name + ': ' + collection[i].songs[1].duration)
        }else if(collection[i].songs[2].name == entry){
            searched.push(collection[i].songs[2].name + ': ' + collection[i].songs[2].duration)
        }
    }
        return searched;   
}


//adding 6 albums into collections array
addToCollection('Parachutes', 'Coldplay', 2000, tracks[0]);
addToCollection('A Rush of Blood to the Head', 'Coldplay', 2002, tracks[1]);
addToCollection('Stoney', 'Post Malone', 2016, tracks[2]);
addToCollection('Beer Bongs & Bentleys', 'Post Malone', 2018, tracks[3]);
addToCollection('Legends Never Die', 'Juice WRLD', 2020, tracks[4]);
addToCollection('Fighting Demons', 'Juice WRLD', 2021, tracks[5]);
//returning to console what is in collection array so far
console.log(collection);
//calling the showCollection function to test
showCollection(collection);
//testing findByArtist function, output should be both albums of post malone and coldplay in results array
findByArtist('Post Malone', collection);
findByArtist('Coldplay', collection);
//testing findByArtist on failed search, output should be an empty array
findByArtist('Taylor Swift', collection);
//testing search with different criteria, title, artist or year published
console.log(search('Juice WRLD')); 
console.log(search('Stoney'));
console.log(search(2000));
console.log(search(2020));
//testing search for non-existing item from array
console.log(search('Lil Wayne'));
//testing search for for nothing typed it the search criteria
console.log(search());

console.log(collection[0].songs[0].name);

console.log(search('Yellow'));
console.log(search('Burn'));

