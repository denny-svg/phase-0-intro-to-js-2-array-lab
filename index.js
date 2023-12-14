// Write your solution here!cats = ["Milo", "Otis", "Grafield"];
const cats = ["Milo", "Otis", "Garfield"];


 (function name(cats) {
    cats.length = 0
    cats.push ["Milo", "Otis", "Garfield", "Ralph"]
});

function destructivelyAppendCat(name) {
    destructivelyAppendCat = [
        "Milo",
        "Otis",
        "Garfield",
        "Ralph"
    ];
    cats.push (name);
}

function destructivelyPrependCat(name) {
    
    cats.unshift(name);  
    cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(arr) {
  return  [...cats, arr];
}

function prependCat(arr) {
    return [arr, ...cats];    
}

function removeLastCat() {
    return cats.slice(0, -1);   
}

function removeFirstCat() {
    return cats.slice(1);
}
console.log(cats);

