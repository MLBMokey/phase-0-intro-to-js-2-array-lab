const cats = [
    "Milo",
    "Otis",
    "Garfield",
];



function destructivelyAppendCat(string) {
    cats.push(string);
}
function destructivelyPrependCat(string) {
    cats.unshift(string);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}
function appendCat(name) {
    const copyCat = [...cats];
    copyCat.push(name);
    return copyCat;
}
function prependCat(name) {
    const copyCat = [name, ...cats];
    return copyCat;
}
function removeLastCat(name) {
    const copyCat = [...cats];
    copyCat.pop(name)
    return copyCat
}
function removeFirstCat(name) {
    const copyCat = [...cats];
    copyCat.shift(name)
    return copyCat
}