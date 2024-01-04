/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCounter = 0;
    let orangeCounter = 0;

    apples.forEach(apple => {
        let position = apple + a;
        if(position >= s && position <= t){
            appleCounter++;
        }
    });

    console.log(appleCounter);

    oranges.forEach(orange => {
        let position = orange + b;
        if(position >= s && position <= t){
            orangeCounter++;
        }
    });

    console.log(orangeCounter);

}

countApplesAndOranges(7, 10, 4, 12, [2,3,-4], [3,-2,-4]);
