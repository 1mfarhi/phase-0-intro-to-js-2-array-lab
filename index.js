/// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
cats.push(name)
};

function destructivelyPrependCat(name) {
    cats.unshift(name)
};

function destructivelyRemoveLastCat() {
    cats.pop()
};

function destructivelyRemoveFirstCat() {
    cats.shift()
};

function appendCat(name) {
    const newCat = [...cats];
    newCat.push(name);
    return newCat
}
    function prependCat(name) {
        const newCat = [...cats];
        newCat.unshift(name);
        return newCat
    };
    
    function removeLastCat() {
        const copyOfCatUsingSlice = cats.slice();
        copyOfCatUsingSlice.pop();
        return copyOfCatUsingSlice
    };
    function removeFirstCat() {
        const copyOfCatUsingSlice = cats.slice();
        copyOfCatUsingSlice.shift();
        return copyOfCatUsingSlice
    };
    

    // const cats = ["Milo", "Otis", "Garfield"];

// function appendCat(name) {
//     const newCat = cats.push(name);
// };


