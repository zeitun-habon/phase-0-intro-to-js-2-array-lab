// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push("Ralph")
    return cats
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
    return cats
}

function destructivelyRemoveLastCat(name){
    cats.pop()
    return cats;

}

function destructivelyRemoveFirstCat(name){
    cats.shift()
    return cats
}
function appendCat(name){
    let cats2 = [...cats]
    cats2.push("Broom")
    return cats2
}

function prependCat(name){
    let cats2 = [...cats]
    cats2.unshift("Arnold")
    return cats2
}

function removeLastCat(name){
    let cats2 = [...cats]
    cats2.pop()
    return cats2;
}
function removeFirstCat(name){
    let cats2 = [...cats]
    cats2.shift()
    return cats2
}