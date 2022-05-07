const removeFromArray = function(array,...remove) {
    let arrayRemove = remove;
    let removeLength = arrayRemove.length;
    
    for (let i = 0; i < removeLength; i++) {
        const locationToRemove = array.indexOf(arrayRemove[i]);
        if (locationToRemove >= 0){
        array.splice(locationToRemove, 1);
        } 
    }
   
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
