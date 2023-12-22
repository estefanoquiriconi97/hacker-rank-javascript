let alice = [5, 7, 7, 4, 5, 1, 2];
let bob = [3, 6, 10, 8, 6, 1, 10];

function compareTriplets(a, b) {
    const [alice, bob] = a.reduce(([alicePoints, bobPoints
    ], value, index) => {
        if(value > b[index]){
            alicePoints++;
        }else if(value < b[index]){
            bobPoints++
        }
        return [alicePoints, bobPoints]
    }, [0, 0])

    return [alice, bob];

}

console.log(compareTriplets(alice, bob));
