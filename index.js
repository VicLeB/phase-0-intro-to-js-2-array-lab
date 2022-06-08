const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(catName){
    cats.push(catName);
}

function destructivelyPrependCat(catName){
    cats.unshift(catName);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    return [...cats, name];
}
function prependCat(name){
    return [name, ...cats];
}

function removeLastCat(){
    return cats.slice(0, -1);
}

function removeFirstCat(){
    return cats.slice(1);
}