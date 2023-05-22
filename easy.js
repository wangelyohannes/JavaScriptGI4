const oldarray = [0, 10, 50];


function arrayAvg(x){
    let arraytotal = 0;
    for (i = 0; i < x.length; i++) {
        arraytotal += x[i];
    }
    return arraytotal/x.length
}

console.log(arrayAvg(oldarray))