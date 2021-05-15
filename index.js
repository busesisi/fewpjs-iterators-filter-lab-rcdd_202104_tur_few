// Code your solution here
function findMatching (driverNames, newString) {
    return driverNames.filter((driver) => { return driver.toLowerCase()  ===  string.toLowerCase()})
}

function fuzzyMatch(driverNames, string){
    return driverNames.filter((driver) => {
        return driver[0] === string[0];
    })
}

function matchName(driversArr, string){
    return driversArr.filter((obj) => { return obj.name == string})
} 