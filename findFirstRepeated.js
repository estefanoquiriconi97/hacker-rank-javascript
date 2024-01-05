function findFirstRepeated(gifts){

    const array = []

    for(const numero of gifts){
        if(array.includes(numero)) return numero
        array.push(numero);
    }

    return -1;

}

console.log(findFirstRepeated([1, 2, 3, 4, 5, 6]));

