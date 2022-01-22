const database = {
    fish: [
        {
            image: "/images/tropical fish.jpeg",
            name: "Kevin",
            species: "Puffer Fish",
            length: 25,
            origin: "Grand Cayman",
            diet: "coral"
        },
        {
            image: "/images/tropical fish.jpeg",
            name: "Kyle",
            species: "popper fish",
            length: 12,
            origin: "Israel",
            diet: "sand"
        },
        {
            image: "/images/tropical fish.jpeg",
            name: "Lloyd",
            species: "clown fish",
            length: 4,
            origin: "Australia",
            diet: "coral"
        },
        {
            image: "/images/tropical fish.jpeg",
            name: "cynthia",
            species: "StarFish",
            length: 15,
            origin: "Portugal",
            diet: "bacteria"
        },
        {
            image: "/images/tropical fish.jpeg",
            name: "Toad",
            species: "frog fish",
            length: 7,
            location: "ponds",
            food: "mud"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const mostHolyFish = (fishobject) => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = []

    for (const fish of fish) {
        if (fish.length % 3 === 0) {
        holyFish.push(fish) 
        }
    }
    return holyFish
}


export const soldierFish = (fishObject) => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldiers = []
    for (const fish of fishes) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = (fishObject) => {
    // Any fish not a multiple of 3 or 5
    let regularFish = []
    for (const fish of object) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0){
            regularFish.push(fish)
    }
    }
    return regularFish
}