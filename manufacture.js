function manufacture(gifts, materials){

    return gifts.filter(regalo => {
        return regalo.split('').every(letra => materials.includes(letra))
    })

}

console.log(manufacture(['tren', 'oso', 'pelota'], 'tronesa'));