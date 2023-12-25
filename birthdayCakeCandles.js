const array = [1, 4, 3, 4, ];

function birthdayCakeCandles(candles) {

    let n = candles.length;

    candles.sort((a,b) => a - b);

    let max = candles[n - 1];

    let amount = 0;

    candles.forEach(candle => {
        if(candle === max){
            amount++
        }
    });

    return amount;

}


console.log(birthdayCakeCandles(array));