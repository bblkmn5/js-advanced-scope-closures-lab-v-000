function produceDrivingRange(blockRange) {
    
    return function(startingBlock, endingBlock) {
        let start = parseInt(startingBlock);
        let end = parseInt(endingBlock);
        let distanceTravelled = Math.abs(end - start)
        let difference = blockRange - distanceTravelled;

        if (difference > 0){
            return `within range by ${difference}`
        } else {
            return `${Math.abs(difference)} blocks out of range`
        }
    }
}

function produceTipCalculator(percent) {
    return function(fare){
        return fare * percent;
    }
}

function createDriver(){
    let driverId = 0;
    return class Driver {
        constructor(name){
            this.name = name;
            this.id = ++driverId;
        }
    }
}