// Code your solution here
function findMatching (driverNames, newString) {
    return driverNames.filter((driver) => { return driver.toLowerCase()  ===  string.toLowerCase()})
}

function fuzzyMatch(driverNames, newString){
    return driverNames.filter((driver) => {
        return driver[0] === string[0];
    })
}

function matchName(driversArr, newString){
    return driverNames.filter((obj) => { return obj.name == string})
} 
