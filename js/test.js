//The function return unique random number array    
function getRandomArray(length) {
    var arr = [];
    while (arr.length < length) {
        var randomnumber = Math.ceil(Math.random() * length)
        if (arr .indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }
    return arr;
}