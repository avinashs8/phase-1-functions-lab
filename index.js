// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if (someValue > 42){
        return someValue - 42
    } else {
        return 42- someValue
    } 
}
function distanceFromHqInFeet (someValue){
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, destination){
    if (destination > start){
        return (destination - start) * 264
    } else 
        return (start - destination) * 264
}

function calculatesFarePrice(start, destination){
    let price = distanceTravelledInFeet(start, destination)
    if (price > 400 && price < 2000){
        return (price -400) * .02
    } else if (price > 2000 && price < 2500){
        return 25
    } else if (price >2500){
        return 'cannot travel that far'
    } else {
        return 0
    }
}