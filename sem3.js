/*const elements = ['elem1', 'elem2', 'elem3'];

console.log(elements.join());
// expected output: "elem1,elem2,elem3"

console.log(elements.join(' '));
// expected output: "elem1 elem2 elem3"

console.log(elements.join(''));
// expected output: "elem1elem2elem3"

console.log(elements.join('-'));
// expected output: "elem1-elem2-elem3"*/


/*const elements = ['This', 'is', 'a', 'test'];

console.log(elements.join(' '));*/

/*function checkDivisible(n, divisor) {
    if (n % divisor) {
        return false
    } else {
        return true
    }
}

console.log(checkDivisible(10, 2))
console.log(checkDivisible(10, 3))*/

/*function occurences(text, character) {
    let count = 0;
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) === character) {
            count++;
        }
    }
    return count;
}

console.log(occurences("sample text", "e"));*/

/*console.log(3 == "3");//verifica daca snt primitive(tipuri de data care nu snt obiecte) (cast)
console.log(3 === "3");//compara tipul de data*/

//input: [2, 4, 6, 7, 8]
//output: [2, 4, 6, 8]

/*function pare() {
    var sir = [2, 4, 6, 7, 8];
    
    for (let i = 0; i < sir.length; i++) {
        if (sir[i] % 2 === 0) {
            console.log(sir[i]);
        }
    }
}

pare();*/


/*function occurences(text, character) {
     return text.split(character).length - 1;
}

console.log(occurences("sample texte", "e"));*/

/*function addToArray() {
    let args = arguments;
    let array = args[0];

    for (var i = 1; i < args.length; i++) {
        array.push(args[i]);
    }
    return array;
}

let array = ["a"];

console.log(addToArray(array, "b", "c").join(", "));*/

function sirpare(sir) {
    
    let args = arguments;
    let array = args[0];
    for (let i = 0; i < args.length; i++) {
        if (args[i] % 2 === 0) {
            array.push(args[i]);
        }
    }
    return array;


}
let sir = [2, 3, 4, 5, 6, 7];
console.log(sirpare(sir));