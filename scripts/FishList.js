// Import the function that returns a copy of the fish array
import { getFish, mostHolyFish, soldierFish, nonHolyFish } from "./database.js"

const fishes = getFish()



// const holyFish = mostHolyFish(fishes)

export const FishList = () => {
    // Invoke the function that you imported from the database module
    // const holyFish = mostHolyFish(fishes)

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishListItem">'

    // Create HTNL representations of each fish here
    // for (const fish of fishes) {
        const holyFishes = mostHolyFish(fishes)
        const soldierFishes = soldierFish(fishes)
        const nonHolyFishes = nonHolyFish(fishes)
        for (const fish of holyFishes) {
            // if (fish === holyFish){
                
                // Why is there a backtick used for this string?
                htmlString += `<section class="holyFishList">
                <div><img  class="fish__image image--card" src="${fish.image}" /></div>
                <div class="fish__name">${fish.name}</div>
                <div class="fish__species">${fish.species}</div>
                <div class="fish__length">${fish.length}</div>
                <div class="fish__location">${fish.location}</div>
                <div class="fish__diet">${fish.food}</div>
                </section>`
            // }
        }
        for (const fish of soldierFishes) {
            // if (fish === soldierFish){
                
                // Why is there a backtick used for this string?
                htmlString += `<section class="soldierFishList">
                <div><img  class="fish__image image--card" src="${fish.image}" /></div>
                <div class="fish__name">${fish.name}</div>
                <div class="fish__species">${fish.species}</div>
                <div class="fish__length">${fish.length}</div>
                <div class="fish__location">${fish.location}</div>
                <div class="fish__diet">${fish.food}</div>
                </section>`
            // }
        }
        for (const fish of nonHolyFishes) {
            // if (fish === nonHolyFish){
                
                // Why is there a backtick used for this string?
                htmlString += `<section class="nonHolyFishList">
                <div><img  class="fish__image image--card" src="${fish.image}" /></div>
                <div class="fish__name">${fish.name}</div>
                <div class="fish__species">${fish.species}</div>
                <div class="fish__length">${fish.length}</div>
                <div class="fish__location">${fish.location}</div>
                <div class="fish__diet">${fish.food}</div>
                </section>`
            // }
        }
    // }
    htmlString += `</article>`
    
    return htmlString
}

