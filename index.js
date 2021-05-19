// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    if (num > 42) {
    return num - 42
    }
    else {
        return 42-num
    }
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num) * 264
}
distanceFromHqInFeet(43);

function distanceTravelledInFeet(numStart,numFinish) {
    if (numStart > numFinish) {
        return (numStart - numFinish) * 264
    }
    else{
        return (numFinish - numStart) * 264
    }
    }
    distanceTravelledInFeet(43, 48);

function calculatesFarePrice(num) {
    if (num < 400) {
        return 0
    }
    else if (num < 2000){
        return (num - 400) * 0.02
    }
    else if(num <=2500) {
        return 25
    }
    else {
        return "cannot travel that far"
    }
    
}

calculatesFarePrice(distanceFromHqInFeet(43,44));
calculatesFarePrice(distanceFromHqInFeet(34,32));
