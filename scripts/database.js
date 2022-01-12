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
            length: 13,
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